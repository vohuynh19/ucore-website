import { Col, Row } from "antd";

import { SizeBox } from "ui/atoms";
import { CourseCard, HottestCourseHeader } from "ui/molecules";

import { Container } from "./styled";
import { useTopCoursesQuery } from "hooks";

const maxDisplayCourse = 4;

const HomeHotCourse = () => {
  const { data } = useTopCoursesQuery();

  return (
    <Container>
      <HottestCourseHeader />

      <SizeBox height={48} />

      <Row gutter={[32, 32]}>
        {(data || []).slice(0, maxDisplayCourse).map((course) => (
          <Col key={course.id} xs={24} sm={12} md={8} lg={6}>
            <CourseCard />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeHotCourse;
