import { GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { Tabs } from "antd";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { dehydrate, QueryClient } from "react-query";

import { API_SERVICES, REACT_QUERY_KEYS } from "src/infra/https";
import { useCourseDetailQuery } from "hooks";

import { Video } from "ui/molecules";
import {
  CourseHeader,
  CourseMaterial,
  CourseInformation,
  CourseReview,
  CourseAnnouncement,
} from "ui/organisms";
import { CourseLayout } from "ui/templates";

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  return {
    paths: [
      {
        params: { id: "1" },
      },
      {
        params: { id: "2" },
      },
    ],
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

  const { data } = useCourseDetailQuery({
    id: id as string,
  });

  return (
    <CourseLayout
      HeaderComponent={
        <CourseHeader
          courseId={data?.id || ""}
          rating={data?.avgRating || 1}
          title={data?.name || ""}
          categories={data?.categories || []}
          lastUpdate={data?.lastUpdate || ""}
        />
      }
      RightComponent={
        <CourseMaterial
          price={data?.price || ""}
          difficultLevel={data?.difficultLevel || ""}
          numberOfStudent={data?.numberOfStudent || 0}
          author={data?.author || { id: "", name: "" }}
          materialsIncluded={data?.materialsIncluded || ""}
          requirements={data?.requirements || ""}
          targetedAudience={data?.targetedAudience || ""}
        />
      }
    >
      <Video />

      <Tabs
        defaultActiveKey="1"
        items={[
          {
            key: "1",
            label: `Tab 1`,
            children: (
              <CourseInformation
                aboutCourse={data?.aboutCourse || ""}
                whatWillLearn={data?.whatWillLearn || ""}
                courseVideo={data?.courseVideo || []}
              />
            ),
          },
          {
            key: "2",
            label: `Tab 2`,
            children: <CourseReview />,
          },
          {
            key: "3",
            label: `Tab 3`,
            children: <CourseAnnouncement />,
          },
        ]}
        onChange={() => {}}
      />
    </CourseLayout>
  );
};

export default CourseDetailPage;
