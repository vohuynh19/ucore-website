import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useTranslation } from "react-i18next";

import { CourseSearch } from "ui";
import BannerLayout from "ui/templates/BannerLayout";

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
        <title>Course List - Vicodemy</title>
      </Head>

      <BannerLayout
        title={t("courses")}
        content={t("coures-list-description", { ns: "sentence" })}
      >
        <CourseSearch />
      </BannerLayout>
    </>
  );
};

export default CourseList;
