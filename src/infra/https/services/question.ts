import { API_ENDPONTS } from "..";
import axiosInstance from "../axios";

const QuestionService = {
    getQuestions: () =>
    axiosInstance
      .get(API_ENDPONTS.question.GET_QUESTIONS)
      .then((res) => res.data),

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
