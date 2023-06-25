import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import {
  QuestionLayout,
  QuestionList,
  QuestionRightFilter,
  QuestionTopFilter,
} from "ui";
import { Form } from "antd";
import { useTablePagination, useQuestionPublic } from "hooks";
import { SORT_OPTION } from "ui/organisms/CourseList/types";
import { PAGE_ROUTES } from "@constants";
import { useDebouncedCallback } from "use-debounce";

export async function getStaticProps({ locale }: StaticProps) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "sentence"])),
    },
  };
}

const MyAccount: NextPage = () => {
  const { t } = useTranslation(["common", "sentence"]);
  const [form] = Form.useForm();

  const { filter, pagination } = useTablePagination(8);
  const router = useRouter();

  const { data } = useQuestionPublic({
    ...filter,
    ...router.query,
  });

  const handleFormChange = () => {
    const changeObj = form.getFieldsValue();

    const queryData: any = {};

    if (changeObj.category !== undefined) {
      queryData.categoryId = changeObj.category;
    }

    if (
      changeObj.resolve?.[0] === "RESOLVED" ||
      changeObj.resolve?.[1] === "RESOLVED"
    ) {
      queryData.resolve = true;
    }

    if (
      changeObj.resolve?.[0] === "UNRESOLVED" ||
      changeObj.resolve?.[1] === "UNRESOLVED"
    ) {
      queryData.resolve = false;
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
        pathname: PAGE_ROUTES.QUESTION,
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
        pathname: PAGE_ROUTES.QUESTION,
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
        <title>Question - Vicodemy</title>
      </Head>

      <Form form={form} layout="vertical" onFieldsChange={onFieldsChange}>
        <QuestionLayout
          RightComponent={<QuestionRightFilter onResetForm={onResetForm} />}
          TopComponent={<QuestionTopFilter />}
          SiderComponent={undefined}
        >
          <QuestionList
            pagination={pagination}
            questions={data?.data || []}
            total={data?.total || 0}
          />
        </QuestionLayout>
      </Form>
    </>
  );
};

export default MyAccount;
