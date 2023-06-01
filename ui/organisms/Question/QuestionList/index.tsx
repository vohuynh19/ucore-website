import { Col, Row } from "antd";

import { SizeBox } from "ui/atoms";
import { QuestionItem } from "ui/molecules";

import { Container } from "./styled";

const maxDisplayCourse = 3;

const data = [
  {
    id: 1,
    asker: "Hoang Hiep",
    question: "How to code right?",
    answer: "",
    resolve: false,
  },
  {
    id: 2,
    asker: "Hoang Hiep 2",
    question:
      "How to code right? 2 How to code right? 2 How to code right? 2 How to code right? 2 How to code right? 2 How to code right? 2 How to code right? 2 How to code right? 2",
    answer: "ok",
    resolve: false,
  },
];

const QuestionList = () => {
  return (
    <Container>
      <Col>
        {(data || []).slice(0, maxDisplayCourse).map((question) => (
          <Row key={question.id}>
            <QuestionItem
              asker={question.asker}
              question={question.question}
              answer={question.answer}
              resolve={question.resolve}
            />
          </Row>
        ))}
      </Col>
    </Container>
  );
};

export default QuestionList;
