import { UseQueryResult } from "react-query";
import useHomeStatistic from "./useHomeStatistic";

/**
 *
 *
 * Type Defination
 *
 *
 */

enum STATISTIC_QUERY {
  HOME_STATISTIC = "HOME_STATISTIC",
}
enum STATISTIC_MUTATE {}

type HookType = STATISTIC_QUERY | STATISTIC_MUTATE;

type ResultMap = {
  [STATISTIC_QUERY.HOME_STATISTIC]: HomeStatistic;
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

const useStatisticQuery = <T extends HookType>(
  type: T
): UseQueryResult<Result<T>, ApiError> => {
  switch (type) {
    case STATISTIC_QUERY.HOME_STATISTIC:
      const queryData = useHomeStatistic();
      return queryData as UseQueryResult<Result<T>, ApiError>;

    default:
      throw new Error(`Invalid STATISTIC_QUERY value: ${type}`);
  }
};

/**
 *
 *
 * Data Mutate
 *
 *
 */

const useStatisticMutate = <T extends STATISTIC_MUTATE>(type: T): Result<T> => {
  switch (type) {
    default:
      throw new Error(`Invalid STATISTIC_MUTATE value: ${type}`);
  }
};

export {
  STATISTIC_MUTATE,
  STATISTIC_QUERY,
  useStatisticQuery,
  useStatisticMutate,
};
