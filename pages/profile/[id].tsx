import { useUserDetail } from "hooks";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useRouter } from "next/router";
import { userMock } from "src/infra/https/entities/user/user.mock";
import { ComingSoon, ProfileUserProfile, ProfileLayout } from "ui";
import { GetStaticPaths } from "next";
import { Tabs } from "antd";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { API_SERVICES, userQueryKeys, REACT_QUERY_KEYS } from "src/infra/https";

export const getStaticPaths: GetStaticPaths = async () => {
  const queryClient = new QueryClient();
  const data = await queryClient.fetchQuery(
    userQueryKeys.instructors({
      offset: 0,
      limit: 10000,
    })
  );
  const paths = data.data.map((user) => ({
    params: { id: user.id },
  }));
  return {
    paths: paths,
    fallback: true,
  };
};

export async function getStaticProps({ locale, params }: StaticProps) {
  const { id = "" } = params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(REACT_QUERY_KEYS.GET_INSTRUCTOR(id), () =>
    API_SERVICES.USER.getUserDetail(id)
  );

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "sentence"])),
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const ProfileUserPage: NextPage = () => {
  const router = useRouter();
  let { id } = router.query;
  const { data: profile } = useUserDetail(id as string);

  return (
    <>
      <Head>
        <title>Profile - Vicodemy</title>
      </Head>

      {/* <ProfileLayout> */}
      {process.env.NEXT_PUBLIC_ENV === "production" ? (
        <ComingSoon />
      ) : (
        <ProfileUserProfile userProfile={profile || userMock} />
      )}
      {/* </ProfileLayout> */}
    </>
  );
};

export default ProfileUserPage;
