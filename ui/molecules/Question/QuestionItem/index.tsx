import { Typography, Row, Col } from "antd";
import Image from "next/image";

import { SizeBox } from "ui/atoms";

import { Flex, FlexSpaceBetween } from "styles";

type Props = {
  asker: string;
  question: string;
  answer: string;
  resolve: boolean;
};

const QuestionItem = ({ asker, question, answer, resolve }: Props) => {
  return (
    <Col style={{ border: "1px solid #ccc", borderRadius: 4, padding: 16 }}>
      <SizeBox height={6} />
      <Flex>
        <Typography.Text style={{ paddingRight: 24 }}>
          {`Question: `}
          {question}
        </Typography.Text>
      </Flex>
      <Row>
        <Typography.Text style={{ paddingRight: 24 }}>
          {`Answer: `}
          {answer}
        </Typography.Text>
      </Row>
      <Row>
        <p>
          <strong>Ask by:</strong>
          {asker}
        </p>
      </Row>
    </Col>
  );
};

export default QuestionItem;
