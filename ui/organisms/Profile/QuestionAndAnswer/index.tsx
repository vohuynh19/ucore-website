import { QuestionLayout } from "ui/templates";
import { Container } from "./styled";
import {
  QuestionList,
  QuestionRightFilter,
  QuestionTopFilter,
} from "ui/organisms/Question";

const QuestionAndAnswer = () => {
  return (
    <Container>
      <QuestionLayout
        RightComponent={<QuestionRightFilter onResetForm={() => {}} />}
        TopComponent={<QuestionTopFilter />}
        SiderComponent={undefined}
      >
        <QuestionList />
      </QuestionLayout>
    </Container>
  );
};

export default QuestionAndAnswer;
