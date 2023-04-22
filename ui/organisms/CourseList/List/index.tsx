import { Col, Row } from "antd";
import { useMemo } from "react";

import { CourseCard } from "ui/molecules";

interface Props {}

const CourseSearch = (props: Props) => {
  console.log("props", props);
  const courseList = useMemo(
    () => [
      {
        id: 1,
      },
      {
        id: 2,
      },
      {
        id: 3,
      },
      {
        id: 4,
      },
      {
        id: 5,
      },
    ],
    []
  );

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
