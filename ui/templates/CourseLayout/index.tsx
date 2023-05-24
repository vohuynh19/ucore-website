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
  padding-top: 32px;
`;

const ChildrenContainer = styled.div``;

const HeaderContainer = styled.div`
  margin-bottom: 32px;
`;

const RightContainer = styled.div`
  padding-left: 40px;
`;

const CourseLayout = ({ HeaderComponent, RightComponent, children }: Props) => {
  return (
    <Container>
      <Row>
        <Col span={24}>
          <HeaderContainer>{HeaderComponent}</HeaderContainer>
        </Col>

        <Col span={16}>
          <ChildrenContainer>{children}</ChildrenContainer>
        </Col>

        <Col span={8}>
          <RightContainer>{RightComponent}</RightContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default CourseLayout;
