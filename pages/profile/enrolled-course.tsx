import { Menu, MenuProps, Typography } from "antd";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useState } from "react";
import { ProfileCourseList, ProfileLayout } from "ui";

export async function getStaticProps({ locale }: StaticProps) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

const EnrolledCoursePage: NextPage = () => {
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const items: MenuProps["items"] = [
    {
      label: "Enrolled Courses",
      key: "Enrolled Courses",
    },
    {
      label: "Active Courses",
      key: "Active Courses",
    },
    {
      label: "Completed Courses",
      key: "Completed Courses",
    },
  ];

  return (
    <>
      <Head>
        <title>Enrolled courses - Vicodemy</title>
      </Head>

      <ProfileLayout>
        <div style={{ padding: "0 24px" }}>
          <Typography.Title level={3}>Enrolled courses</Typography.Title>
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
          />

          <ProfileCourseList />
        </div>
      </ProfileLayout>
    </>
  );
};

export default EnrolledCoursePage;
