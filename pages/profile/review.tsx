import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { ProfileLayout, ProfileReview } from "ui";

export async function getStaticProps({ locale }: StaticProps) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

const ReviewPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Reviews - Vicodemy</title>
      </Head>

      <ProfileLayout>
        <ProfileReview />
      </ProfileLayout>
    </>
  );
};

export default ReviewPage;
