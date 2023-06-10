import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { ComingSoon, ProfileLayout } from "ui";
import OrderHistory from "ui/organisms/Profile/OrderHistory";

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

      <ProfileLayout>
        {process.env.NEXT_PUBLIC_ENV === "production" ? (
          <ComingSoon />
        ) : (
          <OrderHistory />
        )}
      </ProfileLayout>
    </>
  );
};

export default OrderHistoryPage;
