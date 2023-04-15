import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

import {
  HomeCategories,
  HomeCover,
  HomeHotCourse,
  HomeNews,
  HomeStatistic,
  HomeSubcribe,
} from "ui";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home"])),
    },
  };
}

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Vicodemy - Viet Code Academy</title>
      </Head>

      <HomeCover />
      <HomeCategories />
      <HomeHotCourse />
      <HomeStatistic />
      <HomeNews />
      <HomeSubcribe />
    </>
  );
};

export default Home;
