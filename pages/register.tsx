import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { Register, RestrictWidthLayout } from "ui";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

const RegisterPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Register Page- Vicodemy</title>
      </Head>

      <RestrictWidthLayout>
        <Register />
      </RestrictWidthLayout>
    </>
  );
};

export default RegisterPage;
