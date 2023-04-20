import { Button } from "ui/atoms";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import BannerLayout from "ui/templates/BannerLayout";
import { useTranslation } from "react-i18next";
import { CourseSearch } from "ui";

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
        <CourseSearch></CourseSearch>
      </BannerLayout>
    </>
  );
};

export default CourseList;
