import { UseQueryResult } from "react-query";
import useLatestBlog from "./useLatestBlog";

/**
 *
 *
 * Type Defination
 *
 *
 */

enum BLOG_QUERY {
  LATEST_BLOG = "LATEST_BLOG",
}
enum BLOG_MUTATE {}

type HookType = BLOG_QUERY | BLOG_MUTATE;

type ResultMap = {
  [BLOG_QUERY.LATEST_BLOG]: Blog[];
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

const useBlogQuery = <T extends HookType>(
  type: T
): UseQueryResult<Result<T>, ApiError> => {
  switch (type) {
    case BLOG_QUERY.LATEST_BLOG:
      const queryData = useLatestBlog();
      return queryData as UseQueryResult<Result<T>, ApiError>;

    default:
      throw new Error(`Invalid BLOG_QUERY value: ${type}`);
  }
};

/**
 *
 *
 * Data Mutate
 *
 *
 */

const useBlogMutate = <T extends BLOG_MUTATE>(type: T): Result<T> => {
  switch (type) {
    // case BLOG_MUTATE.CREATE_BLOG:
    //   return "Success" as Result<T>;

    default:
      throw new Error(`Invalid BLOG_MUTATE value: ${type}`);
  }
};

export { BLOG_MUTATE, BLOG_QUERY, useBlogQuery, useBlogMutate };
