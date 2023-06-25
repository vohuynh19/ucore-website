import { GetStaticPaths, NextPage } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";

import { useUserDetail } from "hooks";
import { userQueryKeys } from "src/infra/https";

import { ComingSoon, ProfileUserProfile } from "ui";

export const getStaticPaths: GetStaticPaths = async ({ locales }: any) => {
  const queryClient = new QueryClient();
  const data = await queryClient.fetchQuery(
    userQueryKeys.instructors({
      offset: 0,
      limit: 10000,
    })
  );
  let paths: any[] = [];
  data.data.map((user) => {
    for (const locale of locales) {
      paths.push({
        params: { id: user.id },
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

  await queryClient.prefetchQuery(userQueryKeys.detail(id));

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "sentence",
        "sentence",
      ])),
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

      {process.env.NEXT_PUBLIC_ENV === "production" ? (
        <ComingSoon />
      ) : (
        profile && <ProfileUserProfile userProfile={profile} />
      )}
    </>
  );
};

export default ProfileUserPage;
