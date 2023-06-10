import { API_ENDPONTS } from "..";
import axiosInstance from "../axios";

const QuestionService = {
    getQuestionPagination: (filter: PaginationType) =>
    axiosInstance
      .get<PaginationResponse<SQuestion>>(API_ENDPONTS.question.GET_QUESTIONS, {
        params: filter,
      })
      .then((res) => ({
        ...res,
        data: res.data.data.map((question) => ({
          ...question,
          key: question._id,
        })),
      })),

      getQuestionPaginationWithChannelId: (filter: PaginationType, channelId: string) =>
      axiosInstance
        .get<PaginationResponse<SQuestion>>(API_ENDPONTS.question.GET_QUESTIONS_BY_CHANNEL(channelId), {
          params: filter,
        })
        .then((res) => ({
          ...res,
          data: res.data.data.map((question) => ({
            ...question,
            key: question._id,
          })),
        })),

    answerQuestion: (payload: AnswerQuestionPayload) =>
    axiosInstance.patch(
      `${API_ENDPONTS.question.ANSWER_QUESTION}`,
      {
        channelId: payload.channelId,
        questionId: payload.questionId,
        question: payload.question,
        answer: payload.answer,
        discordUserId: payload.discordUserId,
      }
    ),
};

export default QuestionService;
