import { IMAGES_URL } from "@constants";
import { Col, Row } from "antd";
import styled from "styled-components";
import { InstructorCard } from "ui/molecules";

const instructors = [
  {
    name: "Hoang Hiep",
    role: "CEO",
    img: IMAGES_URL.INSTRUCTOR_1,
  },
  {
    name: "Hoang Hiep",
    role: "Game Developer",
    img: IMAGES_URL.INSTRUCTOR_2,
  },
  {
    name: "Hoang Hiep",
    role: "Youtuber",
    img: IMAGES_URL.INSTRUCTOR_3,
  },
  {
    name: "Hoang Hiep",
    role: "Customer Culi",
    img: IMAGES_URL.INSTRUCTOR_4,
  },
];

const Container = styled.section`
  padding: 64px;
`;

const InstructorList = () => {
  return (
    <Container>
      <Row gutter={[40, 40]}>
        {instructors.map((instructor, index) => (
          <Col
            key={index}
            xs={24}
            sm={12}
            lg={6}
            span={instructors.length / 24}
          >
            <InstructorCard {...instructor} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default InstructorList;
