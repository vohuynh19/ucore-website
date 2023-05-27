import { Col, Typography } from "antd";
import { Container } from "./styled";
import { Button } from "ui/atoms";
import DropdownMenu from "ui/molecules/CourseDetail/DropdownMenu";

type Props = {
  aboutCourse: string;
  whatWillLearn: string;
  courseVideo: CourseLessonVideo[];
};

const { Title, Text } = Typography;

const CourseInformation = (props: Props) => {
  return (
    <Container>
      <Title level={3}>About Course</Title>
      <Text>{props.aboutCourse}</Text>

      <br />

      <Title level={3}>What you will learn </Title>
      <Text>{props.whatWillLearn}</Text>

      <br />

      <Title level={3}>Course Content</Title>

      <DropdownMenu
        header="Unity Beginners – Hướng Dẫn Làm Game 2D Bắn Súng Top-Down"
        items={props.courseVideo || []}
      />

      <br />
    </Container>
  );
};

export default CourseInformation;
