import { useMutation } from "@tanstack/react-query";
import { API_SERVICES } from "src/infra/https";

const useExchangeToken = () => {
  const mutateState = useMutation<any, any, any, any>(
    ["token", "exchange"],
    (params: { code: string; email: string }) =>
      API_SERVICES.AUTH.exchangeToken(params.code, params.email)
  );

  return mutateState;
};

export default useExchangeToken;
