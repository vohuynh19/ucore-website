import { Form } from "antd";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useTranslation } from "react-i18next";

import {
  CourseList,
  CourseListLeftFilter as LeftFilter,
  CourseListSiderFilter as SiderFilter,
  CourseListTopFilter as TopFilter,
} from "ui";
import { FilterLayout, BannerLayout } from "ui/templates";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "sentence"])),
    },
  };
}

const CourseListPage: NextPage = () => {
  const { t } = useTranslation(["common", "sentence"]);
  const [form] = Form.useForm();

  const onResetForm = () => {
    form.resetFields();
  };

  return (
    <>
      <Head>
        <title>Course List - Vicodemy</title>
      </Head>

      <BannerLayout
        title={t("courses")}
        content={t("coures-list-description", { ns: "sentence" })}
      >
        <Form form={form} layout="vertical">
          <FilterLayout
            SiderComponent={<SiderFilter onResetForm={onResetForm} />}
            TopComponent={<TopFilter />}
            LeftComponent={<LeftFilter onResetForm={onResetForm} />}
          >
            <CourseList />
          </FilterLayout>
        </Form>
      </BannerLayout>
    </>
  );
};

export default CourseListPage;
