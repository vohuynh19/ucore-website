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
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { questionQueryKeys } from "src/infra/https";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export async function getStaticProps({ locale, params }: StaticProps) {
  const { id = "" } = params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    questionQueryKeys.listWithChannelID(
      {
        limit: 10,
        offset: 0,
      },
      id
    )
  );

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "course"])),
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const MyAccount: NextPage = () => {
  const { t } = useTranslation(["common", "sentence"]);
  const [form] = Form.useForm();

  const { filter, pagination } = useTablePagination(8);
  const router = useRouter();
  const { id } = router.query;

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
