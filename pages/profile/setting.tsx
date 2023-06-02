import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { ProfileLayout, ProfileSetting } from "ui";

export async function getStaticProps({ locale }: StaticProps) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

const SettingPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Settings - Vicodemy</title>
      </Head>

      <ProfileLayout>
        <ProfileSetting />
      </ProfileLayout>
    </>
  );
};

export default SettingPage;
