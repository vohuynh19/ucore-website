import { Col, Row } from "antd";

import { COURSES_QUERY, useCourseQuery } from "hooks";

import { SizeBox } from "ui/atoms";
import { InstructorCard, QuestionItem } from "ui/molecules";

import { Container } from "./styled";
import { Key } from "react";

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
    question: "How to code right? 2",
    answer: "ok",
    resolve: false,
  },
];

const QuestionList = () => {
  // const { data } = useCourseQuery(COURSES_QUERY.TOP_COURSES)({});

  return (
    <Container>
      <SizeBox height={48} />

      <Col offset={2}>
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
