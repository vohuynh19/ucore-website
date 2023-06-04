import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { InstructorDashboardLayout, LessonManagement } from "ui";

export async function getStaticProps({ locale }: StaticProps) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "course"])),
    },
  };
}

const InstructorLessons: NextPage = () => {
  return (
    <>
      <Head>
        <title> Instructor Lessons - Vicodemy</title>
      </Head>

      <InstructorDashboardLayout>
        <LessonManagement />
      </InstructorDashboardLayout>
    </>
  );
};

export default InstructorLessons;
