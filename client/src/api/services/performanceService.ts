import webApi from 'api/webApiHelper';
import { ISetupPerformance } from 'common/models/setupPerformance';

export type TypeResponseOne = ISetupPerformance;

export interface IFilter {
  from: number;
  count: number;
}

const endpoint = '/performances/setup';

export const getPerformance = async (setupId: number, gameId: number): Promise<TypeResponseOne> => {
  const url = `${endpoint}/${setupId}`;
  return await webApi.get(url, { gameId });
};
