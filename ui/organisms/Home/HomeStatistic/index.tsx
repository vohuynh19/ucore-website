import { Col, Row } from "antd";
import { useTranslation } from "next-i18next";

import { HomeNorms, HomeStatisticItem } from "ui/molecules";

import { ScaledPadding } from "styles";
import { Container } from "./styled";
import { useHomeStatisticQuery } from "hooks";

const HomeStatistic = () => {
  const { t } = useTranslation("common");

  const { data } = useHomeStatisticQuery();

  return (
    <Container>
      <ScaledPadding top={64} bottom={32} horizontal={0}>
        <Row gutter={[24, 24]}>
          <Col xs={12} sm={12} md={6}>
            <HomeStatisticItem
              label={t("learners")}
              value={data?.members || 0}
            />
          </Col>
          <Col xs={12} sm={12} md={6}>
            <HomeStatisticItem
              label={t("courses")}
              value={data?.courses || 0}
            />
          </Col>
          <Col xs={12} sm={12} md={6}>
            <HomeStatisticItem
              label={t("instructors")}
              value={data?.instructors || 0}
            />
          </Col>
          <Col xs={12} sm={12} md={6}>
            <HomeStatisticItem
              label={t("coursesPublished")}
              value={data?.coursesPublish || 0}
            />
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
