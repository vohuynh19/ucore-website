import { Button } from "antd";
import { useTranslation } from "react-i18next";
import { Container, LeftContent, RightContent } from "./styled";

const HottestCourseHeader = () => {
  const { t } = useTranslation("home");

  return (
    <Container>
      <LeftContent>
        <h1>{t("topCoursesTitle")}</h1>
        <p>{t("topCoursesDesc")}</p>
      </LeftContent>

      <RightContent>
        <Button type="primary" size="large">
          {t("findCourses")}
        </Button>
      </RightContent>
    </Container>
  );
};

export default HottestCourseHeader;
