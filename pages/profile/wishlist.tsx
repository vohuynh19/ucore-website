import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { ProfileCourseList, ProfileLayout } from "ui";

export async function getStaticProps({ locale }: StaticProps) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

const WishlistPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Wishlists - Vicodemy</title>
      </Head>

      <ProfileLayout>
        <ProfileCourseList />
      </ProfileLayout>
    </>
  );
};

export default WishlistPage;
