import {
  createMutationKeys,
  createQueryKeys,
} from "@lukemorales/query-key-factory";

import API_SERVICES from "../services";

export const courseQueryKeys = createQueryKeys("course", {
  list: (filters: PaginationType) => ({
    queryKey: [{ filters }],
    queryFn: () => API_SERVICES.COURSE.getCoursePagination(filters),
  }),
});

export const courseMutationKeys = createMutationKeys("course", {
  create: () => ({
    mutationKey: ["create"],
    mutationFn: (payload: CreateCoursePayload) =>
      API_SERVICES.COURSE.createCourse(payload),
  }),
});
