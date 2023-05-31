import { Row } from "antd";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useTranslation } from "next-i18next";

import { CardSetting } from "ui";

export async function getStaticProps({ locale }: StaticProps) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "sentence"])),
    },
  };
}

const MyAccount: NextPage = () => {
  const { t } = useTranslation("sentence");

  return (
    <>
      <Head>
        <title>My Account - Vicodemy</title>
      </Head>

      <Row>
        <CardSetting />
      </Row>
    </>
  );
};

export default MyAccount;
