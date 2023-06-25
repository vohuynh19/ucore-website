import { PAGE_ROUTES } from "@constants";
import { Button } from "ui/atoms";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { Container } from "./styled";

const HomeCoverBox = () => {
  const { t } = useTranslation("home");
  const router = useRouter();

  return (
    <Container data-aos="flip-left">
      <h2>
        Viet Code <b>Academy</b>
      </h2>
      <p>{t("desc1")}</p>
      <br />

      <Button
        size="large"
        type="primary"
        onClick={() => router.push(PAGE_ROUTES.COURSE_LIST)}
      >
        {t("moreCourses")}
      </Button>
    </Container>
  );
};

export default HomeCoverBox;
