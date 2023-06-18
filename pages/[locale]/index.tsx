import type { NextPage } from "next";
import Head from "next/head";

import {
  HomeCategories,
  HomeCover,
  HomeHotCourse,
  HomeStatistic,
} from "ui/organisms";
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";

const getStaticProps = makeStaticProps(["common", "home"]);
export { getStaticPaths, getStaticProps };

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
    </>
  );
};

export default Home;
