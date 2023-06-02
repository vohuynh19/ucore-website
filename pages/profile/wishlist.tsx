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

const WishlistPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Wishlists - Vicodemy</title>
      </Head>

      <div> Wishlists </div>
    </>
  );
};

export default WishlistPage;
