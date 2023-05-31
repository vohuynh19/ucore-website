import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { Container } from "styles";

import { PaymentInformation, PaymentSummaryCheckout } from "ui/organisms";
import { DualColorLayout, RestrictLayout } from "ui/templates";

export async function getStaticProps({ locale }: StaticProps) {
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

      <RestrictLayout maxWidth="1024px">
        <Container style={{ margin: "40px 0" }}>
          <DualColorLayout
            LeftComponent={<PaymentInformation />}
            RightComponent={<PaymentSummaryCheckout />}
          />
        </Container>
      </RestrictLayout>
    </>
  );
};

export default CourseList;
