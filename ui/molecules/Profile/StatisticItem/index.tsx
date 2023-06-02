import { Typography } from "antd";
import styled from "styled-components";

type StatisticItemProps = {
  value: number;
  name: string;
  icon: React.ReactNode;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StatisticItem = (props: StatisticItemProps) => {
  return (
    <Container>
      <div className="statistic-icon">{props.icon}</div>

      <div className="statistic-value">{props.value}</div>

      <Typography.Text className="statistic-name">{props.name}</Typography.Text>
    </Container>
  );
};

export default StatisticItem;
