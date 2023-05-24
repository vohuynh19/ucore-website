import { Col, Row } from "antd";

import { SizeBox } from "ui/atoms";
import { InstructorCard, TopInstructorHeader } from "ui/molecules";

import { Container } from "./styled";

import { instructorList } from "./mock";

const maxDisplayCourse = 3;

const HomeTopInstructor = () => {
  return (
    <Container>
      <TopInstructorHeader />

      <SizeBox height={48} />

      <Row gutter={[32, 32]}>
        {instructorList.slice(0, maxDisplayCourse).map((instructor) => (
          <Col key={instructor.id} xs={24} sm={12} md={8} lg={6}>
            <InstructorCard />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeTopInstructor;
