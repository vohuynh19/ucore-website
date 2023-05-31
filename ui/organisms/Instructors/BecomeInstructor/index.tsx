import { IMAGES_URL } from "@constants";
import { Typography } from "antd";
import { useTranslation } from "next-i18next";
import { Container } from "./styled";

import { Button } from "ui/atoms";

const BecomeInstructor = () => {
  const { t } = useTranslation("sentence");

  return (
    <Container>
      <div className="left-content">
        <Typography.Title>{t("becomeInstructor")}</Typography.Title>

        <Typography.Paragraph type="secondary">
          {t("becomeInstructorDesc")}
        </Typography.Paragraph>

        <Button type="primary" size="large">
          {t("becomeInstructor")}
        </Button>
      </div>

      <img alt="" src={IMAGES_URL.INSTRUCTOR_DEMO} />
    </Container>
  );
};

export default BecomeInstructor;
