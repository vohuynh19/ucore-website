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

const EnrolledCoursePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Enrolled courses - Vicodemy</title>
      </Head>

      <div>EnrolledCourse </div>
    </>
  );
};

export default EnrolledCoursePage;
