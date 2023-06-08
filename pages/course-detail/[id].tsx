import { GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { Tabs } from "antd";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { dehydrate, QueryClient } from "@tanstack/react-query";

import {
  API_SERVICES,
  courseQueryKeys,
  REACT_QUERY_KEYS,
} from "src/infra/https";
import { useCourseDetail } from "hooks";

import { Video } from "ui/molecules";
import {
  CourseHeader,
  CourseMaterial,
  CourseInformation,
  CourseReview,
} from "ui/organisms";
import { CourseLayout } from "ui/templates";
import { SizeBox } from "ui";

export const getStaticPaths: GetStaticPaths = async () => {
  const queryClient = new QueryClient();
  const data = await queryClient.fetchQuery(
    courseQueryKeys.list({
      offset: 0,
      limit: 10000,
    })
  );
  const paths = data.data.map((course) => ({
    params: { id: course._id },
  }));
  return {
    paths: paths,
    fallback: "blocking",
  };
};

export async function getStaticProps({ locale, params }: StaticProps) {
  const { id = "" } = params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(REACT_QUERY_KEYS.GET_COURSE_DETAIL(id), () =>
    API_SERVICES.COURSE.getCoursesDetail(id)
  );

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const CourseDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useCourseDetail(id as string);

  console.log("data", data);

  return (
    <CourseLayout
      HeaderComponent={
        <CourseHeader
          courseId={data?._id || ""}
          rating={Number(data?.averageRate) || 0}
          title={data?.name || ""}
          categories={
            data?.categoryInfo?.map((category) => ({
              id: category._id,
              name: category.name,
            })) || []
          }
          lastUpdate={data?.updatedAt || ""}
        />
      }
      RightComponent={<CourseMaterial course={data} />}
    >
      <Video />

      <SizeBox height="24px" />

      <Tabs
        defaultActiveKey="1"
        items={[
          {
            key: "1",
            label: `Course Info`,
            children: (
              <CourseInformation
                aboutCourse={data?.description || ""}
                whatWillLearn={data?.achievementDes || ""}
                courseTopic={[]}
              />
            ),
          },
          {
            key: "2",
            label: `Review`,
            children: <CourseReview />,
          },
        ]}
        onChange={() => {}}
      />
    </CourseLayout>
  );
};

export default CourseDetailPage;
