import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

export async function getStaticProps({ locale }: StaticProps) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

const QuestionAndAnswerPage: NextPage = () => {
  return (
    <>
      <Head>
        <title> Q&A - Vicodemy</title>
      </Head>

      <div> Q&A </div>
    </>
  );
};

export default QuestionAndAnswerPage;
