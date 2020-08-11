import webApi from '../helpers/webApiHelper';
import { TypeFilter } from '../models/typeFilterBuilder';
import { TypeRam } from '../models/typeRam';

type TypeResponseAll = {
  meta: {
    globalCount: string;
  };
  data: TypeRam[];
};

const endpoint = '/api/rams';

export const getAllRam = async (filter: TypeFilter): Promise<TypeResponseAll> => {
  return await webApi.get(endpoint, filter);
};

export const getRam = async (id: number): Promise<TypeRam> => {
  return await webApi.get(`${endpoint}/${id}`);
};

export const updateRam = async (request: TypeRam): Promise<TypeRam> => {
  return await webApi.put(`${endpoint}/${request.id}`, request);
};

export const deleteRam = async (id: number): Promise<void> => {
  return await webApi.delete(`${endpoint}/${id}`);
};
