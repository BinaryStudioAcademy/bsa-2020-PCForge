import webApi from 'api/webApiHelper';
import { ISetupPerformance } from 'common/models/setupPerformance';

export type TypeResponseOne = ISetupPerformance;

export interface IPerformanceFilter {
  from: number;
  count: number;
  cpuId: number;
  gpuId: number;
  ramSize: number;
  gameId: number;
}

const endpoint = '/performances';

export const getPerformance = async (filter: IPerformanceFilter): Promise<TypeResponseOne> => {
  return await webApi.get(endpoint, filter);
};
