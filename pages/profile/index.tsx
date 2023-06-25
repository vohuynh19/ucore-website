import { useMyProfile, useUserDetail } from "hooks";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { ComingSoon, ProfilePersonalProfile, ProfileLayout } from "ui";

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

const ProfileMyProfilePage: NextPage = () => {
  const { data: myProfile } = useMyProfile();

  return (
    <>
      <Head>
        <title>Profile - Vicodemy</title>
      </Head>

      <ProfileLayout>
        {process.env.NEXT_PUBLIC_ENV === "production" ? (
          <ComingSoon />
        ) : (
          myProfile && <ProfilePersonalProfile myProfile={myProfile} />
        )}
      </ProfileLayout>
    </>
  );
};

export default ProfileMyProfilePage;
