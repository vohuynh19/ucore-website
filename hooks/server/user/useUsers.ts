import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "src/infra/https";

const useUsers = (filter: PaginationType) => {
  return useQuery({
    ...queryKeys.user.list(filter),
  });
};

export default useUsers;
