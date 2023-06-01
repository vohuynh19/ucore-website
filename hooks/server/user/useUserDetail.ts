import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "src/infra/https";

const useUserDetail = (id: string) => {
  return useQuery({
    ...queryKeys.user.detail(id),
  });
};

export default useUserDetail;
