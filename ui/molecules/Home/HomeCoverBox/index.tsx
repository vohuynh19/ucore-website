import { PAGE_ROUTES } from "@constants";
import { Button } from "ui/atoms";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { ShadowCard } from "ui/atoms/Card";
import { Container } from "./styled";

const HomeCoverBox = () => {
  const { t } = useTranslation("home");
  const router = useRouter();

  return (
    <Container>
      <ShadowCard title={null}>
        <h2>{t("vietcodeAcademy")}</h2>
        <p>{t("desc1")}</p>
        <br />
        <p>{t("desc2")}</p>
        <p>{t("desc3")}</p>
        <p>{t("desc4")}</p>
        <br />

        <Button
          size="large"
          type="primary"
          onClick={() => router.push(PAGE_ROUTES.COURSE_LIST)}
        >
          {t("moreCourses")}
        </Button>
      </ShadowCard>
    </Container>
  );
};

export default HomeCoverBox;
