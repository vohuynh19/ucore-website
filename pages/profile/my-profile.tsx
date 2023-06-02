import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { ProfileLayout, ProfilePersonalProfile } from "ui";

export async function getStaticProps({ locale }: StaticProps) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

const MyProfilePage: NextPage = () => {
  return (
    <>
      <Head>
        <title> My Profile - Vicodemy</title>
      </Head>

      <ProfileLayout>
        <ProfilePersonalProfile />
      </ProfileLayout>
    </>
  );
};

export default MyProfilePage;
