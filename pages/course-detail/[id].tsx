import { GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { Tabs } from "antd";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

import { courseQueryKeys } from "src/infra/https";
import { useCourseDetail } from "hooks";

import { AppLoading, SizeBox } from "ui/atoms";
import { Video } from "ui/molecules";
import {
  CourseHeader,
  CourseMaterial,
  CourseInformation,
  CourseReview,
} from "ui/organisms";
import { CourseLayout } from "ui/templates";

export const getStaticPaths: GetStaticPaths = async ({ locales }: any) => {
  const queryClient = new QueryClient();
  const data = await queryClient.fetchQuery(
    courseQueryKeys.list({
      offset: 0,
      limit: 10000,
    })
  );

  let paths: any[] = [];

  data.data.map((course) => {
    for (const locale of locales) {
      paths.push({
        params: { id: course._id },
        locale,
      });
    }
  });

  return {
    paths: paths,
    fallback: true,
  };
};

export async function getStaticProps({ locale, params }: StaticProps) {
  const { id = "" } = params;
  const queryClient = new QueryClient();

  try {
    await queryClient.fetchQuery({ ...courseQueryKeys.detail(id), retry: 0 });
    return {
      props: {
        ...(await serverSideTranslations(locale, [
          "common",
          "sentence",
          "course",
        ])),
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch (e) {
    return {
      notFound: true,
      revalidate: 5,
    };
  }
}

const CourseDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { t } = useTranslation("common");

  const { data } = useCourseDetail(id as string);

  if (router.isFallback) {
    return (
      <div style={{ height: 600 }}>
        <AppLoading />
      </div>
    );
  }

  return (
    <CourseLayout
      HeaderComponent={
        <CourseHeader
          courseId={data?._id || ""}
          rating={Number(data?.averageRate) || 0}
          title={data?.name || ""}
          categories={[
            { id: data?.category?._id || "", name: data?.category?.name || "" },
          ]}
          lastUpdate={data?.updatedAt || ""}
        />
      }
      RightComponent={<CourseMaterial course={data} />}
    >
      <Video
        src={data?.courseIntro || "https://www.youtube.com/watch?v=GYkq9Rgoj8E"}
      />

      <SizeBox height="24px" />

      <Tabs
        defaultActiveKey="1"
        items={[
          {
            key: "1",
            label: t(`Course Info`),
            children: (
              <CourseInformation
                courseId={data?._id || ""}
                aboutCourse={data?.description || ""}
                whatWillLearn={data?.achivementDes || ""}
                sections={data?.sections || []}
                showSections={true}
                shortDescription={data?.shortDescription || ""}
              />
            ),
          },
          {
            key: "2",
            label: t(`Review`),
            children: <CourseReview />,
          },
        ]}
        onChange={() => {}}
      />
    </CourseLayout>
  );
};

export default CourseDetailPage;
