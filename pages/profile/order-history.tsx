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

const OrderHistoryPage: NextPage = () => {
  return (
    <>
      <Head>
        <title> Order History- Vicodemy</title>
      </Head>

      <div>Order History </div>
    </>
  );
};

export default OrderHistoryPage;
