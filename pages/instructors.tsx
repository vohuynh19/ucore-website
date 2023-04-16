import { Button } from "ui/atoms";
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

const Instructors: NextPage = () => {
  return (
    <>
      <Head>
        <title>Instructors - Vicodemy</title>
      </Head>

      <Button>Instructors</Button>
    </>
  );
};

export default Instructors;
