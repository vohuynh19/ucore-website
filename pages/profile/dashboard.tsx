import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { ProfileLayout, ProfileDashboard } from "ui";

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

      <ProfileLayout>
        <ProfileDashboard />
      </ProfileLayout>
    </>
  );
};

export default ProfileDashboardPage;
