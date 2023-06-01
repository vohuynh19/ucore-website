import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import {
  QuestionLayout,
  QuestionList,
  QuestionRightFilter,
  QuestionTopFilter,
} from "ui";
import { Form } from "antd";
import TopFilter from "ui/organisms/CourseList/TopFilter";

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
        <QuestionList />
      </QuestionLayout>
    </>
  );
};

export default MyAccount;
