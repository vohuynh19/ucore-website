import { useMutation, useQuery } from "@tanstack/react-query";
import { ExchangeCodeParams, questionQueryKeys } from "src/infra/https/keys";

export const useQuestion = (params: PaginationType<SQuestion>) => {
  return useQuery({
    ...questionQueryKeys.list(params),
  });
};

export const useQuestionWithChannelId = (params: PaginationType<SQuestion>, channelId: string) => {
  return useQuery({
    ...questionQueryKeys.listWithChannelID(params, channelId),
  });
};