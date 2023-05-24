import { useQuery } from "react-query";
import { API_SERVICES, REACT_QUERY_KEYS } from "src/infra/https";

const useHomeStatisticQuery = () => {
  const queryData = useQuery<HomeStatistic, ApiError>(
    REACT_QUERY_KEYS.GET_HOME_STATISTIC,
    API_SERVICES.STATISTIC.getHomeStatistic
  );

  return queryData;
};

export default useHomeStatisticQuery;
