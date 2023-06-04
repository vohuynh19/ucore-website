import { useMutation, useQuery } from "@tanstack/react-query";
import {
  API_SERVICES,
  REACT_QUERY_KEYS,
  courseMutationKeys,
} from "src/infra/https";

// Query

export const useCourseDetailQuery = (params: { id: string }) => {
  const queryData = useQuery<Course, ApiError>(
    REACT_QUERY_KEYS.GET_COURSE_DETAIL(params.id),
    () => API_SERVICES.COURSE.getCoursesDetail(params.id)
  );
  return queryData;
};

export const useTopCoursesQuery = () => {
  const queryData = useQuery<Course[], ApiError>(
    REACT_QUERY_KEYS.GET_TOP_COURSE,
    API_SERVICES.COURSE.getCourses
  );
  return queryData;
};

// Mutation

export const useCreateCourse = () => {
  return useMutation<any, unknown, CreateCoursePayload>({
    ...courseMutationKeys.create(),
  });
};
