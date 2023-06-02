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

const MyProfilePage: NextPage = () => {
  return (
    <>
      <Head>
        <title> My Profile - Vicodemy</title>
      </Head>

      <div>My Profile </div>
    </>
  );
};

export default MyProfilePage;
