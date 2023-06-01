import { GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { dehydrate, QueryClient } from "@tanstack/react-query";

import { API_SERVICES, REACT_QUERY_KEYS } from "src/infra/https";
import { useCourseDetailQuery } from "hooks";

import { DropdownCourseContent, Video } from "ui/molecules";
import { LessonInformation, LessonReview } from "ui/organisms";
import { CourseLayout, LessonLayout } from "ui/templates";
import { SizeBox } from "ui";
import { Tabs, Typography } from "antd";
import { mockCourse } from "src/infra/https/entities/course/course.mock";

const { Paragraph, Text, Title } = Typography;

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

const LessonPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useCourseDetailQuery({
    id: id as string,
  });

  const CourseContentTab = ({ course }: { course: Course }) => {
    return (
      <div>
        <Title level={5}>Course Content</Title>
        <DropdownCourseContent courseTopics={course.courseTopic || []} />
      </div>
    );
  };

  return (
    <LessonLayout
      RightComponent={<CourseContentTab course={mockCourse}></CourseContentTab>}
      VideoComponent={<Video></Video>}
    >
      <SizeBox height="24px" />

      <Tabs
        defaultActiveKey="1"
        items={[
          {
            key: "1",
            label: `Overview`,
            children: <LessonInformation />,
          },
          {
            key: "2",
            label: `Reviews`,
            children: <LessonReview />,
          },
        ]}
        onChange={() => {}}
      />
    </LessonLayout>
  );
};

export default LessonPage;
