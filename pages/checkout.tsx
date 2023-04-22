import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import { Container } from "styles";

import { RestrictLayout, PaymentInformation, PaymentSummaryCheckout } from "ui";
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
