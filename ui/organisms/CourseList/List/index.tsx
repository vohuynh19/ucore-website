import { Col, Row } from "antd";

import { CourseCard } from "ui/molecules";
import { courseList } from "../mock";

interface Props {}

const CourseSearch = ({}: Props) => {
  return (
    <Row gutter={[32, 32]}>
      {courseList.map((course) => (
        <Col key={course.id} xs={24} sm={12} md={12} lg={8} xl={6}>
          <CourseCard />
        </Col>
      ))}
    </Row>
  );
};

export default CourseSearch;
