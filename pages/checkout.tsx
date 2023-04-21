import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useTranslation } from "react-i18next";

import { RestrictWidthLayout, PaymentCheckout, PaymentInformation } from "ui";
import DualColorLayout from "ui/templates/DualColorLayout";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "sentence"])),
    },
  };
}

const CourseList: NextPage = () => {
  const { t } = useTranslation(["common", "sentence"]);

  return (
    <>
      <Head>
        <title>Checkout - Vicodemy</title>
      </Head>

      <RestrictWidthLayout maxWidth="880px">
        <DualColorLayout
          LeftComponent={<PaymentInformation />}
          RightComponent={<PaymentCheckout />}
        />
      </RestrictWidthLayout>
    </>
  );
};

export default CourseList;
