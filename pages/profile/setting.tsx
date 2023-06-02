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

const SettingPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Settings - Vicodemy</title>
      </Head>

      <div> Settings </div>
    </>
  );
};

export default SettingPage;
