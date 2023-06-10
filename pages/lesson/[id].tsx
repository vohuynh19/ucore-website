import { GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { dehydrate, QueryClient } from "@tanstack/react-query";

import {
  API_SERVICES,
  courseQueryKeys,
  REACT_QUERY_KEYS,
} from "src/infra/https";
import { useCourseDetail, useLesson, useUserCourse } from "hooks";

import { Video } from "ui/molecules";
import { LessonLayout } from "ui/templates";
import { Typography } from "antd";
import DropdownMenu from "ui/molecules/CourseDetail/DropdownMenu";
import { PAGE_ROUTES } from "@constants";
import Head from "next/head";

const { Title } = Typography;

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

const LessonPage = () => {
  const router = useRouter();
  const { id, sectionId, videoId } = router.query;
  const { data } = useCourseDetail(id as string);
  const { data: userCourse } = useUserCourse(id as string);
  const { data: lesson } = useLesson(videoId as string);

  const getSections = (course: SCourse) => {
    return course.sections.map((section) => ({
      label: section.sectionName,
      value: section._id,
      children: section.newVideo.map((vid) => ({
        label: vid.name || vid._id,
        value: vid._id,
        metadata: {
          available: vid.isTrivial || userCourse?.data,
          active: vid._id === videoId,
          time: vid.duration,
          onClick: () =>
            (vid.isTrivial || userCourse?.data) &&
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

  return (
    <>
      <Head>
        <title> {data?.name} | Vicodemy </title>
      </Head>

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
          <Video src={lesson?.youtubeLink || data?.courseIntro || " "} />
        }
      ></LessonLayout>
    </>
  );
};

export default LessonPage;
