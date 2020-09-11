import webApi from '../webApi.helper';
import { Cpu } from 'common/models/cpu';
import { CpuFilter } from 'common/models/filter.model';
import { CpuCreationAttributes } from 'common/models/cpu';

export type TypeResponseAllCpus = {
  meta: {
    globalCount: number;
    countAfterFiltering: number;
  };
  data: Cpu[];
};

const endpoint = '/cpus';

export const getAllCpu = async (filter: CpuFilter): Promise<TypeResponseAllCpus> => {
  const isMultipleSocketFilter: boolean = filter.socketId?.includes(',') || false;
  const serverFilter: CpuFilter = {
    count: filter.count,
    from: filter.from,
    name: filter.name,
    clockspeed: filter.clockspeed,
    ...(isMultipleSocketFilter && { socketIds: filter.socketId }),
    ...(!isMultipleSocketFilter && { socketId: filter.socketId }),
  };

  const response = await webApi.get(endpoint, serverFilter);
  return response;
};

export const getCpu = async (id: number): Promise<Cpu> => {
  return await webApi.get(`${endpoint}/${id}`);
};

export const updateCpu = async (request: Cpu): Promise<Cpu> => {
  return await webApi.put(`${endpoint}/${request.id}`, request);
};

export const deleteCpu = async (id: number): Promise<void> => {
  return await webApi.delete(`${endpoint}/${id}`);
};

export const postCpu = async (request: CpuCreationAttributes): Promise<Cpu> => {
  return await webApi.post(endpoint, request);
};
