import { useMutation, useQuery } from "@tanstack/react-query";
import {
  API_SERVICES,
  REACT_QUERY_KEYS,
  courseMutationKeys,
  courseQueryKeys,
} from "src/infra/https";

// Query

export const useCourseDetailQuery = (params: { id: string }) => {
  const queryData = useQuery<Course, ApiError>(
    REACT_QUERY_KEYS.GET_COURSE_DETAIL(params.id),
    () => API_SERVICES.COURSE.getCoursesDetail(params.id)
  );
  return queryData;
};

export const useCourses = (params: PaginationType<SCourse>) => {
  return useQuery({
    ...courseQueryKeys.list(params),
  });
};

// Mutation

export const useCreateCourse = () => {
  return useMutation<any, unknown, CreateCoursePayload>({
    ...courseMutationKeys.create(),
  });
};

export const useDeleteCourse = () => {
  return useMutation<any, unknown, DeleteCoursePayload>({
    ...courseMutationKeys.delete(),
  });
};
