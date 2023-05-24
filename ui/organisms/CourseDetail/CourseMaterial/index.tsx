import { Container } from "./styled";
import { Typography, Row, Col, Divider } from "antd";
import { InstructorCard } from "ui/molecules";
import { Button } from "ui/atoms";

type Props = {
  price: string;
  difficultLevel: string;
  numberOfStudent: number;
  author: User;
  materialsIncluded: string;
  requirements: string;
  targetedAudience: string;
};

const { Title, Text, Link } = Typography;

const CourseMaterial = (props: Props) => {
  return (
    <Container>
      <Title level={3}>{props.price}</Title>

      <Button> Enroll now</Button>

      <Text>30-day money-back guarantee</Text>

      <Divider />

      <Text>
        Difficult: {props.materialsIncluded} <br />
        {props.requirements} Total Enrolled <br />
        Created by:
      </Text>

      <InstructorCard />

      <Title level={3}>Material Includes</Title>
      <Text>{props.materialsIncluded}</Text>

      <Title level={3}>Audience</Title>
      <Text>{props.targetedAudience}</Text>

      <Title level={3}>Requirements</Title>
      <Text>{props.requirements}</Text>
    </Container>
  );
};

export default CourseMaterial;
