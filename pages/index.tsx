import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

import {
  HomeCategories,
  HomeTopInstructor,
  HomeCover,
  HomeHotCourse,
  HomeStatistic,
} from "ui/organisms";

export async function getStaticProps({ locale }: StaticProps) {
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
      <HomeTopInstructor />
      <HomeHotCourse />
      <HomeStatistic />
    </>
  );
};

export default Home;
