import { Col, Row } from "antd";

import { useInstructorsQuery } from "hooks";

import { SizeBox } from "ui/atoms";
import { InstructorCard, TopInstructorHeader } from "ui/molecules";

import { Container } from "./styled";

const maxDisplayCourse = 3;

const HomeTopInstructor = () => {
  const { data } = useInstructorsQuery();

  return (
    <Container>
      <TopInstructorHeader />

      <SizeBox height={48} />

      <Row gutter={[32, 32]}>
        {(data || []).slice(0, maxDisplayCourse).map(({ id, ...rest }) => (
          <Col key={id} xs={24} sm={12} md={8} lg={6}>
            <InstructorCard {...rest} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeTopInstructor;
