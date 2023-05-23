import { UseQueryResult } from "react-query";
import useCourseDetail from "./useCourseDetail";
import useTopCourses from "./useTopCourses";

/**
 *
 *
 * Type Defination
 *
 *
 */

enum COURSES_QUERY {
  TOP_COURSES = "TOP_COURSES",
  LIST_COURSES = "LIST_COURSES",
  COURSE_DETAIL = "COURSE_DETAIL",
}
enum COURSES_MUTATE {
  JOIN_COURSE = "JOIN_COURSE",
}

type HookType = COURSES_QUERY | COURSES_MUTATE;

type ParamsMap = {
  [COURSES_QUERY.TOP_COURSES]: {};
  [COURSES_QUERY.LIST_COURSES]: {};
  [COURSES_QUERY.COURSE_DETAIL]: {
    id: string;
  };

  [COURSES_MUTATE.JOIN_COURSE]: {
    id: string;
  };
};

type ResultMap = {
  [COURSES_QUERY.TOP_COURSES]: Course[];
  [COURSES_QUERY.LIST_COURSES]: Course[];
  [COURSES_QUERY.COURSE_DETAIL]: Course;

  [COURSES_MUTATE.JOIN_COURSE]: string;
};

type Params<T extends HookType> = T extends keyof ParamsMap
  ? ParamsMap[T]
  : never;

type Result<T extends HookType> = T extends keyof ResultMap
  ? ResultMap[T]
  : never;

/**
 *
 *
 * Data Query
 *
 *
 */

const useCourseQuery = <T extends HookType>(
  type: T
): ((params: Params<T>) => UseQueryResult<Result<T>, ApiError>) => {
  type ReturnType = (params: Params<T>) => UseQueryResult<Result<T>, ApiError>;

  switch (type) {
    case COURSES_QUERY.TOP_COURSES:
      return useTopCourses as ReturnType;
    case COURSES_QUERY.COURSE_DETAIL:
      return useCourseDetail as ReturnType;

    default:
      throw new Error(`Invalid COURSES_QUERY value: ${type}`);
  }
};

/**
 *
 *
 * Data Mutate
 *
 *
 */

const useCourseMutate = <T extends COURSES_MUTATE>(type: T): Result<T> => {
  switch (type) {
    case COURSES_MUTATE.JOIN_COURSE:
      return "Success" as Result<T>;

    default:
      throw new Error(`Invalid COURSES_MUTATE value: ${type}`);
  }
};

export { COURSES_MUTATE, COURSES_QUERY, useCourseQuery, useCourseMutate };
