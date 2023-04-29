import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useTranslation } from "react-i18next";

import { BannerLayout, BecomeInstructor, InstructorList } from "ui";

export async function getStaticProps({ locale }: StaticProps) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "sentence"])),
    },
  };
}

const Instructors: NextPage = () => {
  const { t } = useTranslation("sentence");

  return (
    <>
      <Head>
        <title>Instructors - Vicodemy</title>
      </Head>

      <BannerLayout
        title={t("instructorIntroTitle")}
        content={t("instructorIntroDesc")}
      >
        <InstructorList />
        <BecomeInstructor />
      </BannerLayout>
    </>
  );
};

export default Instructors;
