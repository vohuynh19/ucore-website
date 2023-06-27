import { Button } from "antd";
import { useMyProfile, useUserDetail } from "hooks";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import {
  ComingSoon,
  ProfilePersonalProfile,
  ProfileLayout,
  ConnectDiscord,
} from "ui";

export async function getStaticProps({ locale }: StaticProps) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "sentence",
        "sentence",
      ])),
    },
  };
}

const ConnectDiscordPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Connect Discord - Vicodemy</title>
      </Head>

      <ProfileLayout>
        {process.env.NEXT_PUBLIC_ENV === "production" ? (
          <ComingSoon />
        ) : (
          <ConnectDiscord />
        )}
      </ProfileLayout>
    </>
  );
};

export default ConnectDiscordPage;
