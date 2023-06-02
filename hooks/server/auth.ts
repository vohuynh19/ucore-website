import { useMutation } from "@tanstack/react-query";
import { ExchangeCodeParams, authMutationKeys } from "src/infra/https/keys";

export const useLogout = () => {
  return useMutation({
    ...authMutationKeys.logout(),
  });
};

export const useExchangeToken = () => {
  return useMutation<unknown, unknown, ExchangeCodeParams>({
    ...authMutationKeys.exchangeToken(),
  });
};
