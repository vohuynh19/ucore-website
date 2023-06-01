import { createQueryKeys } from "@lukemorales/query-key-factory";

import API_SERVICES from "../services";

export const userQueryKeys = createQueryKeys("user", {
  getSelf: () => ({
    queryKey: ["self"],
    queryFn: () => API_SERVICES.USER.getUser(),
  }),
  detail: (userId: string) => ({
    queryKey: [userId],
    queryFn: () => API_SERVICES.USER.getUserDetail(userId),
  }),
  list: (filters: PaginationType) => ({
    queryKey: [{ filters }],
    queryFn: () => API_SERVICES.USER.getUserList(filters),
  }),
});
