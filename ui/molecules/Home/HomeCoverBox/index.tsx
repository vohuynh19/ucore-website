import { Button } from "antd";
import { useTranslation } from "react-i18next";
import { ShadowCard } from "ui/atoms/Card";
import { Container } from "./styled";

const HomeCoverBox = () => {
  const { t } = useTranslation("home");

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

        <Button size="large" type="primary">
          {t("moreCourses")}
        </Button>
      </ShadowCard>
    </Container>
  );
};

export default HomeCoverBox;
