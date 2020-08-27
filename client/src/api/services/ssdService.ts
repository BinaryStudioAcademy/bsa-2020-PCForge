import webApi from 'api/webApiHelper';
import { TypeFilter } from 'common/models/typeFilterBuilder';
import { TypeSsd } from 'common/models/typeSsd';
import { SsdCreationAttributes } from 'common/models/ssd';

export type TypeResponseAllSsds = {
  meta: {
    globalCount: number;
    countAfterFiltering: number;
  };
  data: TypeSsd[];
};

const endpoint = '/ssds';

export const getAllSsd = async (filter: TypeFilter): Promise<TypeResponseAllSsds> => {
  return await webApi.get(endpoint, filter);
};

export const getSsd = async (id: number): Promise<TypeSsd> => {
  return await webApi.get(`${endpoint}/${id}`);
};

export const updateSsd = async (request: TypeSsd): Promise<TypeSsd> => {
  return await webApi.put(`${endpoint}/${request.id}`, request);
};

export const deleteSsd = async (id: number): Promise<void> => {
  return await webApi.delete(`${endpoint}/${id}`);
};

export const postSsd = async (request: SsdCreationAttributes): Promise<void> => {
  return await webApi.post(`${endpoint}`, request);
};
