import webApi from 'api/webApiHelper';
import { TypeCpu } from 'common/models/typeCpu';
import { FilterModel } from 'common/models/filter.model';

export type TypeResponseAllCpus = {
  meta: {
    globalCount: number;
    countAfterFiltering: number;
  };
  data: TypeCpu[];
};

const endpoint = '/cpus';

export const getAllCpu = async (filter: FilterModel): Promise<TypeResponseAllCpus> => {
  const response = await webApi.get(endpoint, filter);
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
