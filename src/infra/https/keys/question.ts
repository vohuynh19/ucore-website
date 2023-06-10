import {
    createMutationKeys,
    createQueryKeys,
  } from "@lukemorales/query-key-factory";
  
  import API_SERVICES from "../services";
  
  export const questionQueryKeys = createQueryKeys("question", {
    list: (filters: PaginationType<SQuestion>) => ({
      queryKey: [{ filters }],
      queryFn: () => API_SERVICES.QUESTION.getQuestionPagination(filters),
    }),

    listWithChannelID: (filters: PaginationType<SQuestion>, channelId: string) => ({
      queryKey: [{ filters }],
      queryFn: () => API_SERVICES.QUESTION.getQuestionPaginationWithChannelId(filters, channelId),
    }),
  });
  
  export const questionMutationKeys = createMutationKeys("question", {
    create: () => ({
      mutationKey: ["update"],
      mutationFn: (payload: AnswerQuestionPayload) =>
        API_SERVICES.QUESTION.answerQuestion(payload),
    }),
  });
  