import webApi from '../helpers/webApiHelper';
import { TypeFilter } from '../models/typeFilterBuilder';
import { TypeCpu } from '../models/typeCpu';

type TypeResponseAll = {
  meta: {
    globalCount: string;
    countAfterFiltering: string;
  };
  data: TypeCpu[];
};

const endpoint = '/api/cpus';

export const getAllCpu = async (filter: TypeFilter): Promise<TypeResponseAll> => {
  return await webApi.get(endpoint, filter);
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
