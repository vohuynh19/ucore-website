import { UseQueryResult } from "react-query";
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
}
enum COURSES_MUTATE {
  JOIN_COURSE = "JOIN_COURSE",
}

type HookType = COURSES_QUERY | COURSES_MUTATE;

type ResultMap = {
  [COURSES_QUERY.TOP_COURSES]: Course[];
  [COURSES_QUERY.LIST_COURSES]: Course[];
  [COURSES_MUTATE.JOIN_COURSE]: string;
};

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
): UseQueryResult<Result<T>, ApiError> => {
  switch (type) {
    case COURSES_QUERY.TOP_COURSES:
      const queryData = useTopCourses();
      return queryData as UseQueryResult<Result<T>, ApiError>;

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
