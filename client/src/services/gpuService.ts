import webApi from '../helpers/webApiHelper';
import { TypeFilter } from '../models/typeFilterBuilder';
import { TypeGpu } from '../models/typeGpu';

type TypeResponseAll = {
  meta: {
    globalCount: string;
    countAfterFiltering: string;
  };
  data: TypeGpu[];
};

const endpoint = '/api/gpus';

export const getAllGpu = async (filter: TypeFilter): Promise<TypeResponseAll> => {
  return await webApi.get(endpoint, filter);
};

export const getGpu = async (id: number): Promise<TypeGpu> => {
  return await webApi.get(`${endpoint}/${id}`);
};

export const updateGpu = async (request: TypeGpu): Promise<TypeGpu> => {
  return await webApi.put(`${endpoint}/${request.id}`, request);
};

export const deleteGpu = async (id: number): Promise<void> => {
  return await webApi.delete(`${endpoint}/${id}`);
};
