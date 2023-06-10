import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { ComingSoon, ProfileDashboard, ProfileLayout } from "ui";

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
        {process.env.NEXT_PUBLIC_ENV === "production" ? (
          <ComingSoon />
        ) : (
          <ProfileDashboard />
        )}
      </ProfileLayout>
    </>
  );
};

export default ProfileDashboardPage;
