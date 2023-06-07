import { Typography } from "antd";
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
        <div style={{ padding: "0 24px" }}>
          <Typography.Title level={3}>Wishlist</Typography.Title>
          <ProfileCourseList />
        </div>
      </ProfileLayout>
    </>
  );
};

export default WishlistPage;
