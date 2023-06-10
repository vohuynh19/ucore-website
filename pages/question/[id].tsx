import type { NextPage } from "next";
import { GetStaticPaths } from "next";
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
import { useTablePagination, useQuestionWithChannelId } from "hooks";
import { dehydrate, QueryClient } from "@tanstack/react-query";

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
  const { id } = router.query;
  console.log(router.query);

  const { data } = useQuestionWithChannelId(
    {
      ...filter,
      ...router.query,
    },
    id as string
  );

  const onResetForm = () => {
    form.resetFields();
  };

  return (
    <>
      <Head>
        <title>Question - Vicodemy</title>
      </Head>

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
    </>
  );
};

export default MyAccount;
