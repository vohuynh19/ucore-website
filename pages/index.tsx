import { Button } from "ui/atoms";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { Form, Input, message } from "antd";
import styled from "styled-components";
import { auth } from "src/infra/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import firestore from "firebase/firestore";

import { useState } from "react";

export async function getStaticProps({ locale }: StaticProps) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "sentence", "home"])),
    },
  };
}

const StyledWrapper = styled.div`
  height: 100vh;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Home: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user] = useAuthState(auth);

  // const asd = firestore.

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      message.success("Đăng nhập thành công");
    } catch (error) {
      message.error("Sai tài khoản hoặc mật khẩu");
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      message.success("Đăng xuất thành công");
    } catch (error) {
      message.error("Có lỗi xảy ra");
    }
  };

  return (
    <>
      <Head>
        <title>Xet Pasta - Mì ý phô mai</title>
      </Head>

      {user?.email ? (
        <>
          <Button type="primary" isFullWidth onClick={logout}>
            Đăng xuất
          </Button>
        </>
      ) : (
        <StyledWrapper>
          <h2
            style={{
              textAlign: "center",
            }}
          >
            Đăng nhập
          </h2>

          <Form>
            <Form.Item>
              <Input
                placeholder="Nhập tài khoản"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Item>

            <Form.Item>
              <Input
                type="password"
                placeholder="Nhập mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Item>

            <Button type="primary" isFullWidth onClick={signIn}>
              Đăng nhập
            </Button>
          </Form>
        </StyledWrapper>
      )}
    </>
  );
};

export default Home;
