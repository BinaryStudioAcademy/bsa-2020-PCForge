import webApi from 'api/webApiHelper';
import { TypeFilter } from 'common/models/typeFilterBuilder';
import { TypeHdd } from 'common/models/typeHdd';

export type TypeResponseAllHdds = {
  meta: {
    globalCount: number;
    countAfterFiltering: number;
  };
  data: TypeHdd[];
};

const endpoint = '/hdds';

export const getAllHdd = async (filter: TypeFilter): Promise<TypeResponseAllHdds> => {
  return await webApi.get(endpoint, filter);
};

export const getHdd = async (id: number): Promise<TypeHdd> => {
  return await webApi.get(`${endpoint}/${id}`);
};

export const updateHdd = async (request: TypeHdd): Promise<TypeHdd> => {
  return await webApi.put(`${endpoint}/${request.id}`, request);
};

export const deleteHdd = async (id: number): Promise<void> => {
  return await webApi.delete(`${endpoint}/${id}`);
};