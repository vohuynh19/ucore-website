import { Button } from "ui/atoms";
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

const CourseDetail: NextPage = () => {
  return (
    <>
      <Head>
        <title>Course Detail - Vicodemy</title>
      </Head>

      <Button>Course Detail</Button>
    </>
  );
};

export default CourseDetail;
