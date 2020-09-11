import webApi from 'api/webApi.helper';
import { ISetupPerformance } from 'common/models/setupPerformance.model';

export type TypeResponseOne = ISetupPerformance;

export interface IPerformanceFilter {
  cpuId: number;
  gpuId: number;
  ramSize: number;
  gameId: number;
}

const endpoint = '/performances';

export const getPerformance = async (filter: IPerformanceFilter): Promise<TypeResponseOne> => {
  return await webApi.get(endpoint, filter);
};
