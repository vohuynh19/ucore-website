import { Typography, Row, Col, Card, Space, Form, Input, message } from "antd";
import { useAnswerQuestion } from "hooks";
import { useState } from "react";
import { queryClientInstance, questionQueryKeys } from "src/infra/https";
import { UserProfile } from "ui";
import { Button } from "ui/atoms";

const { Paragraph, Text, Title } = Typography;

type Props = {
  questionObj: SQuestion;
};

const QuestionItem = ({ questionObj }: Props) => {
  const [modifiedAnswer, setModifiedAnswer] = useState(questionObj.answer);
  const [editingAnswer, setEditingAnswer] = useState(false);

  const { mutate, isLoading } = useAnswerQuestion();

  const handleEditAnswer = () => {
    // If submit answer

    if (editingAnswer == true) {
      const payload: AnswerQuestionPayload = {
        channelId: questionObj.channelId,
        questionId: questionObj._id,
        question: questionObj.question,
        answer: modifiedAnswer,
        discordUserId: questionObj.discordUserId,
      };

      onAnswerQuestion(payload);
    }
    setEditingAnswer(!editingAnswer);
  };

  const onAnswerQuestion = (payload: AnswerQuestionPayload) => {
    mutate(
      {
        ...payload,
      },
      {
        onSuccess: (res) => {
          message.success("Answer question success");
        },
        onError: (err) =>
          message.error({
            content: JSON.stringify(err),
          }),
      }
    );
  };

  return (
    <Card
      type="inner"
      title={questionObj.question}
      style={{ width: "100%", marginBottom: 8 }}
      extra={
        <Button type="primary" onClick={handleEditAnswer}>
          {editingAnswer ? "Save" : "Response"}
        </Button>
      }
      bordered
    >
      <Row>
        <Col span={17}>
          <Card style={{ width: "100%", marginBottom: 4 }}>
            <Text style={{ paddingRight: 24 }}>
              {`Question: `}
              {questionObj.question}
            </Text>
          </Card>
          {editingAnswer ? (
            <Card style={{ width: "100%" }}>
              <Input.TextArea
                placeholder="Your answer"
                value={modifiedAnswer}
                onChange={(e) => setModifiedAnswer(e.target.value)}
                autoSize={{ minRows: 3, maxRows: 6 }}
              />
            </Card>
          ) : (
            <Card style={{ width: "100%" }}>
              <Text style={{ paddingRight: 24 }}>
                {`Answer: `}
                {modifiedAnswer}
              </Text>
            </Card>
          )}
        </Col>
        <Col span={6} offset={1}>
          <Space direction="vertical">
            <Text>
              <Text strong>{`Ask by: `}</Text>
              {questionObj.reporter}
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
