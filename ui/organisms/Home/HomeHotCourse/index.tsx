import { Col, Row } from "antd";

import { SizeBox } from "ui/atoms";
import { CourseCard, HottestCourseHeader } from "ui/molecules";

import { Container } from "./styled";
import { useCourses } from "hooks";

const maxDisplayCourse = 4;

const HomeHotCourse = () => {
  const { data } = useCourses({
    offset: 0,
    limit: maxDisplayCourse,
  });

  return (
    <Container>
      <HottestCourseHeader />

      <SizeBox height={48} />

      <Row gutter={[32, 32]}>
        {(data?.data || []).slice(0, maxDisplayCourse).map((course) => (
          <Col key={course._id} xs={24} sm={12} md={8} lg={6}>
            <CourseCard {...course} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeHotCourse;
