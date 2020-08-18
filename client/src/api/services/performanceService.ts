import webApi from 'api/webApiHelper';
import { SetupPerformance } from 'common/models/setupPerformance';

export type TypeResponseAll = SetupPerformance;

export interface IFilter {
  from: number;
  count: number;
}

const endpoint = '/performances/setup';

export const getPerformance = async (setupId: string, gameId: string): Promise<TypeResponseAll> => {
  const url = `${endpoint}/${setupId}`;
  return await webApi.get(url, { gameId });
};
