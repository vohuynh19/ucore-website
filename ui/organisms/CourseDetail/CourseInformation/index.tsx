import { Col, Typography } from "antd";
import { Container } from "./styled";
import { Button } from "ui/atoms";

type Props = {
  aboutCourse: string;
  whatWillLearn: string;
  courseVideo: CourseVideo[];
};

const { Title, Text, Link } = Typography;

const CourseInformation = (props: Props) => {
  return (
    <Container>
      <Title level={3}>What you will learn </Title>
      <Text>{props.whatWillLearn}</Text>

      <br />

      <Title level={3}>Course Content</Title>
      {(props.courseVideo || []).map((courseVideo) => (
        <Col key={courseVideo.id} xs={24} sm={12} md={8} lg={6}>
          <Button>{courseVideo.title}</Button>
        </Col>
      ))}

      <br />

      <Title level={3}>About Course</Title>
      <Text>{props.aboutCourse}</Text>
    </Container>
  );
};

export default CourseInformation;
