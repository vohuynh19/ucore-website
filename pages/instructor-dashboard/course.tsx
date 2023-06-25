import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { CourseManagement, InstructorDashboardLayout } from "ui";

export async function getStaticProps({ locale }: StaticProps) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "sentence",
        "course",
      ])),
    },
  };
}

const InstructorCourses: NextPage = () => {
  return (
    <>
      <Head>
        <title> Instructor Courses - Vicodemy</title>
      </Head>

      <InstructorDashboardLayout>
        <CourseManagement />
      </InstructorDashboardLayout>
    </>
  );
};

export default InstructorCourses;
