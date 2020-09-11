import webApi from 'api/webApiHelper';
import { TypeUserStatistic, TypeHarwareStatistic } from 'common/models/typeStatistic';

export type TypeResponseStatistic = {
  meta: {
    globalCount: number;
    countAfterFiltering: number;
  };
  data: TypeUserStatistic[] | TypeHarwareStatistic[];
};

const endpoint = '/statistics';

export const getStatisticMostUsedHardware = async (): Promise<TypeResponseStatistic> => {
  return await webApi.get(`${endpoint}/?type=mostUsedHardware`);
};

export const getStatisticMostActiveUsers = async (): Promise<TypeResponseStatistic> => {
  return await webApi.get(`${endpoint}/?type=mostActiveUsers`);
};
