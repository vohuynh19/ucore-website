import { Button } from "antd";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Vicodemy - Viet Code Academy</title>
      </Head>

      <Button>Hello world</Button>
    </>
  );
};

export default Home;
