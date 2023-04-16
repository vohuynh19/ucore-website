import { Col, Row } from "antd";
import { HomeNorms, HomeStatisticItem } from "ui/molecules";
import { statistic } from "./mock";
import { StatisticContainer } from "./styled";

const HomeStatistic = () => {
  return (
    <>
      <StatisticContainer>
        <Row gutter={[24, 24]}>
          {statistic.map((stat) => (
            <Col key={stat.label} span={24 / 4}>
              <HomeStatisticItem label={stat.label} value={stat.value} />
            </Col>
          ))}
        </Row>
      </StatisticContainer>

      <HomeNorms />
    </>
  );
};

export default HomeStatistic;
