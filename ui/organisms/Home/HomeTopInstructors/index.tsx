import { Col, Row } from "antd";

import { useInstructors } from "hooks";

import { SizeBox } from "ui/atoms";
import { InstructorCard, TopInstructorHeader } from "ui/molecules";

import { Container } from "./styled";

const maxInstructors = 4;

const HomeTopInstructor = () => {
  const { data } = useInstructors({
    offset: 0,
    limit: maxInstructors,
  });

  return (
    <Container>
      <TopInstructorHeader />

      <SizeBox height={48} />

      <Row gutter={[32, 32]}>
        {(data?.data || []).map(({ id, ...rest }) => (
          <Col key={id} xs={24} sm={12} md={8} lg={6}>
            <InstructorCard {...rest} imgLink={rest.avatar} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeTopInstructor;
