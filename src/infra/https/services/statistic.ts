import { mockHomeStatistic } from "../entities/statistic/home-statistic.mock";

const StatisticService = {
  getHomeStatistic: (): Promise<HomeStatistic> =>
    new Promise((resolve) => {
      resolve(mockHomeStatistic);
    }),
};

export default StatisticService;
