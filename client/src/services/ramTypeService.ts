import webApi from '../helpers/webApiHelper';
import { TypeFilter } from '../models/typeFilterBuilder';
import { TypeRamType } from '../models/typeRamType';

type TypeResponseAll = {
  meta: {
    globalCount: string;
    countAfterFiltering?: string;
  };
  data: TypeRamType[];
};

const endpoint = '/api/ramTypes';

export const getAllRamType = async (filter: TypeFilter): Promise<TypeResponseAll> => {
  return await webApi.get(endpoint, filter);
};

export const getRamType = async (id: number): Promise<TypeRamType> => {
  return await webApi.get(`${endpoint}/${id}`);
};

export const updateRamType = async (request: TypeRamType): Promise<TypeRamType> => {
  return await webApi.put(`${endpoint}/${request.id}`, request);
};

export const deleteRamType = async (id: number): Promise<void> => {
  return await webApi.delete(`${endpoint}/${id}`);
};
