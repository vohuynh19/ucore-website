import { GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { dehydrate, QueryClient } from "@tanstack/react-query";

import { API_SERVICES, REACT_QUERY_KEYS } from "src/infra/https";
import { useCourseDetail, useCourseDetailQuery } from "hooks";

import { Video } from "ui/molecules";
import { LessonLayout } from "ui/templates";
import { Typography } from "antd";
import { mockCourse } from "src/infra/https/entities/course/course.mock";
import DropdownMenu from "ui/molecules/CourseDetail/DropdownMenu";
import { PAGE_ROUTES } from "@constants";

const { Title } = Typography;

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
  const { id, sectionId, videoId } = router.query;

  const getSections = (course: SCourse) => {
    return course.sections.map((section) => ({
      label: section.sectionName,
      value: section._id,
      children: section.newVideo.map((vid) => ({
        label: vid.name || vid._id,
        value: vid._id,
        metadata: {
          active: vid._id === videoId,
          time: vid.duration,
          onClick: () =>
            router.push(
              {
                pathname: PAGE_ROUTES.LESSON(course._id),
                query: {
                  sectionId: section._id,
                  videoId: vid._id,
                },
              },
              undefined,
              {
                shallow: true,
              }
            ),
        },
      })),
    }));
  };

  const { data } = useCourseDetail(id as string);

  return (
    <LessonLayout
      RightComponent={
        <div>
          <Title level={5}>Course Content</Title>
          {data && (
            <DropdownMenu
              activeKey={sectionId as string}
              items={data ? getSections(data) : []}
            />
          )}
        </div>
      }
      VideoComponent={
        <Video
          src={
            data?.courseIntro || "https://www.youtube.com/watch?v=GYkq9Rgoj8E"
          }
        />
      }
    ></LessonLayout>
  );
};

export default LessonPage;
