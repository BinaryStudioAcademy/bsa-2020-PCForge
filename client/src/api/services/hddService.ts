import webApi from 'api/webApiHelper';
import { TypeFilter } from 'common/models/typeFilterBuilder';
import { TypeHdd } from 'common/models/typeHdd';
import { HddCreationAttributes } from 'common/models/hdd';

export type TypeResponseAllHdds = {
  meta: {
    globalCount: number;
    countAfterFiltering: number;
  };
  data: TypeHdd[];
};

const endpoint = '/hdds';

export const getAllHdd = async (filter: TypeFilter): Promise<TypeResponseAllHdds> => {
  if (filter.name) filter.name = encodeURIComponent(filter.name);
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

export const postHdd = async (request: HddCreationAttributes): Promise<void> => {
  return await webApi.post(`${endpoint}`, request);
};
