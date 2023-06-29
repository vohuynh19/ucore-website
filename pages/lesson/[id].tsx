import { GetStaticPaths } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { useMemo } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

import { courseQueryKeys } from "src/infra/https";
import { useCourseDetail, useLesson, useUserCourse } from "hooks";
import { PAGE_ROUTES } from "@constants";

import { Video } from "ui/molecules";
import { LessonLayout } from "ui/templates";
import { Typography } from "antd";
import DropdownMenu from "ui/molecules/CourseDetail/DropdownMenu";
import { AppLoading } from "ui";

const { Title } = Typography;

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
    fallback: "blocking",
  };
};

export async function getStaticProps({ locale, params }: StaticProps) {
  const { id = "" } = params;
  const queryClient = new QueryClient();
  try {
    await queryClient.prefetchQuery(courseQueryKeys.detail(id));
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

const LessonPage = () => {
  const router = useRouter();
  const { t } = useTranslation("course");
  const { id, sectionId, videoId } = router.query;
  const { data } = useCourseDetail(id as string);
  const { data: userCourse } = useUserCourse(id as string);
  const { data: lesson } = useLesson(videoId as string);

  const sections = useMemo(() => {
    return data?.sections.map((section) => ({
      label: section.sectionName,
      value: section._id,
      children: section.newVideo.map((vid) => ({
        label: vid.name || vid._id,
        value: vid._id,
        metadata: {
          available: vid.isTrivial || userCourse?.data,
          active: vid._id === videoId,
          time: vid.duration,
          onClick: () => {
            (vid.isTrivial || userCourse?.data) &&
              router.push(
                {
                  pathname: PAGE_ROUTES.LESSON(data._id),
                  query: {
                    sectionId: section._id,
                    videoId: vid._id,
                  },
                },
                undefined,
                {
                  shallow: true,
                }
              );
          },
        },
      })),
    }));
  }, [data, router, userCourse, videoId]);

  if (router.isFallback) {
    return (
      <div style={{ height: 600 }}>
        <AppLoading />
      </div>
    );
  }

  return (
    <>
      <Head>
        <title> {data?.name} | Vicodemy </title>
      </Head>

      <LessonLayout
        RightComponent={
          <div>
            <Title level={5}>{t("courseContent")}</Title>
            {data && (
              <DropdownMenu
                activeKey={sectionId as string}
                items={data ? sections || [] : []}
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
