import { PropsWithChildren, ReactNode } from "react";
import { Col, Row } from "antd";
import styled from "styled-components";

import { container } from "styles";

type Props = PropsWithChildren<{
  HeaderComponent: ReactNode;
  RightComponent: ReactNode;
}>;

const Container = styled.div`
  ${container};
  margin: 40px 0;
`;

const CourseLayout = ({ HeaderComponent, RightComponent, children }: Props) => {
  return (
    <Container>
      <Row>
        <Col span={24}>{HeaderComponent}</Col>
        <Col span={18}>{children}</Col>
        <Col span={6}>{RightComponent}</Col>
      </Row>
    </Container>
  );
};

export default CourseLayout;
