import { Col, Row } from "antd";
import { PropsWithChildren, ReactNode } from "react";
import { Container } from "./styled";

type Props = PropsWithChildren<{
  LeftComponent: ReactNode;
  TopComponent: ReactNode;
}>;

const FilterLayout = ({ LeftComponent, TopComponent, children }: Props) => {
  return (
    <Container>
      <Row>
        <Col offset={1} span={5}>
          {LeftComponent}
        </Col>

        <Col offset={1} span={16}>
          {TopComponent}

          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default FilterLayout;
