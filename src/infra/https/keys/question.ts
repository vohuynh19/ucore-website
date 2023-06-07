import {
    createMutationKeys,
    createQueryKeys,
  } from "@lukemorales/query-key-factory";
  
  import API_SERVICES from "../services";
  
  export const questionQueryKeys = createQueryKeys("question", {
    list: () => ({
      queryKey: [{  }],
      queryFn: () => API_SERVICES.QUESTION.getQuestions(),
    }),
  });
  
  export const questionMutationKeys = createMutationKeys("question", {
    create: () => ({
      mutationKey: ["update"],
      mutationFn: (payload: AnswerQuestionPayload) =>
        API_SERVICES.QUESTION.answerQuestion(payload),
    }),
  });
  