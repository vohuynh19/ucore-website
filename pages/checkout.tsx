import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useTranslation } from "react-i18next";

import { RestrictWidthLayout, Checkout } from "ui";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "sentence"])),
    },
  };
}

const CourseList: NextPage = () => {
  const { t } = useTranslation(["common", "sentence"]);

  return (
    <>
      <Head>
        <title>Checkout - Vicodemy</title>
      </Head>

      <RestrictWidthLayout maxWidth="1000px">
        <Checkout />
      </RestrictWidthLayout>
    </>
  );
};

export default CourseList;
