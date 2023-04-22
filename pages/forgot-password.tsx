import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { ForgotPassword, RestrictLayout } from "ui";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

const ForgotPasswordPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Forgot password - Vicodemy</title>
      </Head>

      <RestrictLayout maxWidth="400px">
        <ForgotPassword />
      </RestrictLayout>
    </>
  );
};

export default ForgotPasswordPage;
