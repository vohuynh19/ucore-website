import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { InstructorDashboard, InstructorDashboardLayout } from "ui";

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

const InstructorDashboardPage: NextPage = () => {
  return (
    <>
      <Head>
        <title> Instructor Dashboard - Vicodemy </title>
      </Head>

      <InstructorDashboardLayout>
        <InstructorDashboard />
      </InstructorDashboardLayout>
    </>
  );
};

export default InstructorDashboardPage;
