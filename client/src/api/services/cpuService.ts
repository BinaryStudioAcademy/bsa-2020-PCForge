import webApi from 'api/webApiHelper';
import { TypeFilter } from 'common/models/typeFilterBuilder';
import { TypeCpu } from 'common/models/typeCpu';

export type TypeResponseAllCpus = {
  meta: {
    globalCount: number;
    countAfterFiltering: number;
  };
  data: TypeCpu[];
};

const endpoint = '/cpus';

export const getAllCpu = async (filter: TypeFilter): Promise<TypeResponseAllCpus> => {
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
