import { Col, Row } from "antd";
import { useTranslation } from "react-i18next";

import { HomeNorms, HomeStatisticItem } from "ui/molecules";

import { ScaledPadding } from "styles";
import { Container } from "./styled";

const HomeStatistic = () => {
  const { t } = useTranslation("common");

  return (
    <Container>
      <ScaledPadding top={64} bottom={32} horizontal={0}>
        <Row gutter={[24, 24]}>
          <Col xs={12} sm={12} md={6}>
            <HomeStatisticItem label={t("learners")} value={10} />
          </Col>
          <Col xs={12} sm={12} md={6}>
            <HomeStatisticItem label={t("courses")} value={10} />
          </Col>
          <Col xs={12} sm={12} md={6}>
            <HomeStatisticItem label={t("instructors")} value={10} />
          </Col>
          <Col xs={12} sm={12} md={6}>
            <HomeStatisticItem label={t("coursesPublished")} value={10} />
          </Col>
        </Row>
      </ScaledPadding>

      <ScaledPadding vertical={64} horizontal={0}>
        <HomeNorms />
      </ScaledPadding>
    </Container>
  );
};

export default HomeStatistic;
