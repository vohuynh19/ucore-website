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

const ReviewPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Reviews - Vicodemy</title>
      </Head>

      <div> Reviews </div>
    </>
  );
};

export default ReviewPage;
