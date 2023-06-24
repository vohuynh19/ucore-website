import { Form } from "antd";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { useDebouncedCallback } from "use-debounce";
import { useRouter } from "next/router";

import { useCourses, useTablePagination } from "hooks";
import { PAGE_ROUTES } from "@constants";

import {
  CourseList,
  CourseListLeftFilter as LeftFilter,
  CourseListSiderFilter as SiderFilter,
  CourseListTopFilter as TopFilter,
} from "ui/organisms";
import { FilterLayout, BannerLayout } from "ui/templates";
import { SORT_OPTION } from "ui/organisms/CourseList/types";

export async function getStaticProps({ locale }: StaticProps) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "sentence"])),
    },
  };
}

const CourseListPage: NextPage = () => {
  const { t } = useTranslation(["common", "sentence"]);
  const [form] = Form.useForm();
  const router = useRouter();

  const { filter, pagination } = useTablePagination(6);
  const { data } = useCourses({ ...filter, ...router.query });

  const handleFormChange = () => {
    const changeObj = form.getFieldsValue();

    const queryData: any = {};

    if (changeObj.category !== undefined) {
      queryData.categoryId = changeObj.category;
    }

    if (changeObj.price?.[0] === "FREE" || changeObj.price?.[1] === "FREE") {
      queryData.price = 0;
    }

    if (changeObj.price?.[0] === "PAID" || changeObj.price?.[1] === "PAID") {
      queryData.price = "DESC";
    }

    if (changeObj.sort) {
      if (changeObj.sort === SORT_OPTION.HIGHEST_RATE) {
        queryData.rate = "DESC";
      }
      if (changeObj.sort === SORT_OPTION.MOST_POPULAR) {
        queryData.isPopular = true;
      }
      if (changeObj.sort === SORT_OPTION.NEWEST) {
      }
    }

    if (changeObj.search) {
      queryData.search = changeObj.search;
    }

    router.push(
      {
        pathname: PAGE_ROUTES.COURSE_LIST,
        query: queryData,
      },
      undefined,
      { shallow: true }
    );
  };

  const debounceChange = useDebouncedCallback(handleFormChange, 300);

  const onResetForm = () => {
    form.resetFields();
    router.push(
      {
        pathname: PAGE_ROUTES.COURSE_LIST,
      },
      undefined,
      { shallow: true }
    );
  };

  const onFieldsChange = (e: any) => {
    if (e[0].name[0] === "search") {
      debounceChange();
    } else {
      handleFormChange();
    }
  };

  return (
    <>
      <Head>
        <title>{t("courseList")} - Vicodemy</title>
      </Head>

      <BannerLayout
        title={t("courses")}
        content={t("coures-list-description", { ns: "sentence" })}
      >
        <Form form={form} layout="vertical" onFieldsChange={onFieldsChange}>
          <FilterLayout
            SiderComponent={<SiderFilter onResetForm={onResetForm} />}
            TopComponent={<TopFilter />}
            LeftComponent={<LeftFilter onResetForm={onResetForm} />}
          >
            <CourseList
              courses={data?.data || []}
              total={data?.total || 0}
              pagination={pagination}
            />
          </FilterLayout>
        </Form>
      </BannerLayout>
    </>
  );
};

export default CourseListPage;
