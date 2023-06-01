import { Typography, Row, Col, Card, Space } from "antd";
import { SizeBox, Button } from "ui/atoms";

import { Flex, FlexSpaceBetween } from "styles";
import { UserProfile } from "ui";

const { Paragraph, Text, Title } = Typography;

type Props = {
  asker: string;
  question: string;
  answer: string;
  resolve: boolean;
};

const QuestionItem = ({ asker, question, answer, resolve }: Props) => {
  return (
    <Card
      type="inner"
      title={question}
      style={{ width: "100%", marginBottom: 8 }}
      // extra={<Button type="primary">Join Discord</Button>}
      bordered
    >
      <Row>
        <Col span={17}>
          <Card style={{ width: "100%", marginBottom: 4 }}>
            <Text style={{ paddingRight: 24 }}>
              {`Question: `}
              {question}
            </Text>
          </Card>
          <Card style={{ width: "100%" }}>
            <Text style={{ paddingRight: 24 }}>
              {`Answer: `}
              {answer}
            </Text>
          </Card>
        </Col>
        <Col span={6} offset={1}>
          <Space direction="vertical">
            <Text>
              <Text strong>{`Ask by: `}</Text>
              {asker}
            </Text>
            <Text strong>{"In:"}</Text>

            <Row>
              <UserProfile
                avatarLink={
                  "https://vicodemy.com/wp-content/uploads/2023/03/0901df4f8a204c7e1531.jpeg"
                }
                name={"Test"}
                discordFollower={5}
              />
            </Row>
          </Space>
        </Col>
      </Row>
    </Card>
  );
};

export default QuestionItem;
