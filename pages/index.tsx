import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { SizeBox } from "ui";

import {
  HomeCategories,
  HomeCover,
  HomeTopInstructor,
  HomeHotCourse,
  HomeStatistic,
  HomeSubcribe,
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
      <SizeBox height={40} />
      <HomeTopInstructor />
      <HomeHotCourse />
      <HomeCategories />
      <HomeStatistic />
      <HomeSubcribe />
    </>
  );
};

export default Home;
