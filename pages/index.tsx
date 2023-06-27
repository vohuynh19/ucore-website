import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

import {
  HomeCategories,
  HomeTopInstructor,
  HomeCover,
  HomeHotCourse,
  HomeStatistic,
  HomeSubcribe,
} from "ui/organisms";

export async function getStaticProps({ locale }: StaticProps) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "sentence", "home"])),
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
      <HomeStatistic />
      <HomeTopInstructor />
      <HomeHotCourse />

      <HomeSubcribe />
    </>
  );
};

export default Home;
