import type { NextPage } from "next";
import { Form } from "antd";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { CourseUpload } from "ui";

export async function getStaticProps({ locale }: StaticProps) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "course"])),
    },
  };
}

const CreateCourse: NextPage = () => {
  const [form] = Form.useForm();

  const onResetForm = () => {
    form.resetFields();
  };

  return (
    <>
      <Head>
        <title>Create Course- Vicodemy</title>
      </Head>

      <Form layout="vertical" size="large">
        <CourseUpload />
      </Form>
    </>
  );
};

export default CreateCourse;
