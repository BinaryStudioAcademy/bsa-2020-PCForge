import webApi from 'api/webApiHelper';
import { TypeFilter } from 'api/models/typeFilterBuilder';
import { TypeRamType } from 'api/models/typeRamType';

type TypeResponseAll = {
  meta: {
    globalCount: number;
    countAfterFiltering: number;
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
