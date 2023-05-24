import { Col, Row } from "antd";
import { useInstructorsQuery } from "hooks";
import styled from "styled-components";
import { InstructorCard } from "ui/molecules";

const Container = styled.section`
  padding: 64px;
`;

const InstructorList = () => {
  const { data } = useInstructorsQuery();

  return (
    <Container>
      <Row gutter={[40, 40]}>
        {(data || []).map((instructor, index) => (
          <Col key={index} xs={24} sm={12} lg={6}>
            <InstructorCard {...instructor} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default InstructorList;
