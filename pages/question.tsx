import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useTranslation } from "react-i18next";

import { QuestionList } from "ui";

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
        <title>Question - Vicodemy</title>
      </Head>

      <QuestionList />
    </>
  );
};

export default MyAccount;
