import { Button } from "antd";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

const CourseList: NextPage = () => {
  return (
    <>
      <Head>
        <title>Course List - Vicodemy</title>
      </Head>

      <Button>Course List</Button>
    </>
  );
};

export default CourseList;
