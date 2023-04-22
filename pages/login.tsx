import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { Login, RestrictLayout } from "ui";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

const LoginPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Log in - Vicodemy</title>
      </Head>

      <RestrictLayout maxWidth="400px">
        <Login />
      </RestrictLayout>
    </>
  );
};

export default LoginPage;
