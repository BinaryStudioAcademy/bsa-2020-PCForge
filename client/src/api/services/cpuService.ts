import webApi from 'api/webApiHelper';
import { TypeCpu } from 'common/models/typeCpu';
import { FilterModel, CpuFilter } from 'common/models/filter.model';
import { CpuCreationAttributes } from 'common/models/cpu';

export type TypeResponseAllCpus = {
  meta: {
    globalCount: number;
    countAfterFiltering: number;
  };
  data: TypeCpu[];
};

const endpoint = '/cpus';

export const getAllCpu = async (filter: CpuFilter): Promise<TypeResponseAllCpus> => {
  if (filter.name) filter.name = encodeURIComponent(filter.name);
  const isMultipleSocketFilter: boolean = filter.socketId?.includes(',') || false;
  const serverFilter: CpuFilter = {
    count: filter.count,
    from: filter.from,
    name: filter.name,
    'clockspeed[maxValue]': filter['clockspeed[maxValue]'],
    'clockspeed[minValue]': filter['clockspeed[minValue]'],
    ...(isMultipleSocketFilter && { socketIds: filter.socketId }),
    ...(!isMultipleSocketFilter && { socketId: filter.socketId }),
  };
  const response = await webApi.get(endpoint, serverFilter);
  return response;
};

export const getCpu = async (id: number): Promise<TypeCpu> => {
  return await webApi.get(`${endpoint}/${id}`);
};

export const updateCpu = async (request: TypeCpu): Promise<TypeCpu> => {
  return await webApi.put(`${endpoint}/${request.id}`, request);
};

export const deleteCpu = async (id: number): Promise<void> => {
  return await webApi.delete(`${endpoint}/${id}`);
};

export const postCpu = async (request: CpuCreationAttributes): Promise<TypeCpu> => {
  return await webApi.post(endpoint, request);
};
