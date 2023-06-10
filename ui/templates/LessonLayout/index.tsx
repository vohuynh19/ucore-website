import { PropsWithChildren, ReactNode } from "react";
import { Col, Row } from "antd";
import styled from "styled-components";

import { container } from "styles";

type Props = PropsWithChildren<{
  VideoComponent: ReactNode;
  RightComponent: ReactNode;
}>;

const Container = styled.div`
  ${container};
  padding-top: 44px;
  padding-bottom: 44px;
`;

const ChildrenContainer = styled.div``;

const RightContainer = styled.div`
  padding-left: 40px;
  position: sticky;
  top: 40px;

  @media (max-width: 991px) {
    position: static;
  }
`;

const LessonLayout = ({ RightComponent, VideoComponent, children }: Props) => {
  return (
    <Container>
      <Row>
        <Col span={16}>
          <Col span={24}>
            <ChildrenContainer>{VideoComponent}</ChildrenContainer>
          </Col>

          <Col span={24}>
            <ChildrenContainer>{children}</ChildrenContainer>
          </Col>
        </Col>

        <Col span={8}>
          <RightContainer>{RightComponent}</RightContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default LessonLayout;
