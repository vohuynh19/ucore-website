import { Button } from "antd";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import AcUnitIcon from "@mui/icons-material/AcUnit";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

const Home: NextPage = () => {
  return (
    <div>
      <Button>Antd work</Button>
      <AcUnitIcon />
    </div>
  );
};

export default Home;
