import { Col, Row } from "antd";
import { ScaledPadding } from "styles";
import { HomeNorms, HomeStatisticItem } from "ui/molecules";
import { statistic } from "./mock";
import { Container } from "./styled";

const HomeStatistic = () => {
  return (
    <Container>
      <ScaledPadding top={64} bottom={32} horizontal={0}>
        <Row gutter={[24, 24]}>
          {statistic.map((stat) => (
            <Col key={stat.label} xs={12} sm={12} md={6}>
              <HomeStatisticItem label={stat.label} value={stat.value} />
            </Col>
          ))}
        </Row>
      </ScaledPadding>

      <ScaledPadding vertical={64} horizontal={0}>
        <HomeNorms />
      </ScaledPadding>
    </Container>
  );
};

export default HomeStatistic;
