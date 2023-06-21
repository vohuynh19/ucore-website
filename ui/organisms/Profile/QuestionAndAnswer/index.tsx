import { QuestionLayout } from "ui/templates";
import { Container } from "./styled";
import {
  QuestionList,
  QuestionRightFilter,
  QuestionTopFilter,
} from "ui/organisms/Question";
import { useQuestion, useTablePagination } from "hooks";
import { useRouter } from "next/router";

const QuestionAndAnswer = () => {
  const { filter, pagination } = useTablePagination(8);
  const router = useRouter();

  const { data } = useQuestion({
    ...filter,
    ...router.query,
  });

  return (
    <Container>
      <QuestionLayout
        RightComponent={<QuestionRightFilter onResetForm={() => {}} />}
        TopComponent={<QuestionTopFilter />}
        SiderComponent={undefined}
      >
        <QuestionList
          pagination={pagination}
          questions={data?.data || []}
          total={data?.total || 0}
        />
      </QuestionLayout>
    </Container>
  );
};

export default QuestionAndAnswer;
