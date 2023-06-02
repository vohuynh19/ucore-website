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

const ProfileDashboardPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard - Vicodemy</title>
      </Head>

      <div>Profile Dashboard</div>
    </>
  );
};

export default ProfileDashboardPage;
