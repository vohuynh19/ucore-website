import {
  createQueryKeys,
  createMutationKeys,
} from "@lukemorales/query-key-factory";

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
  instructors: (filters: PaginationType) => ({
    queryKey: ["instructors", { filters }],
    queryFn: () => API_SERVICES.USER.getInstructorList(filters),
  }),
});

export const userMutationKeys = createMutationKeys("user", {
  registerInstructor: () => ({
    mutationKey: ["register-instructor"],
    mutationFn: () => API_SERVICES.COURSE.registerInstructor(),
  }),
});
