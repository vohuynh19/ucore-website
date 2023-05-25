import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import { CourseUpload } from "ui";

export async function getStaticProps({ locale }: StaticProps) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["course"])),
    },
  };
}

const CreateCourse: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Course- Vicodemy</title>
      </Head>

      <CourseUpload />
    </>
  );
};

export default CreateCourse;
