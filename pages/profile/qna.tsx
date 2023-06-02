import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { ProfileLayout } from "ui";
import QuestionAndAnswer from "ui/organisms/Profile/QuestionAndAnswer";

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

      <ProfileLayout>
        <QuestionAndAnswer />
      </ProfileLayout>
    </>
  );
};

export default QuestionAndAnswerPage;
