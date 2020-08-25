import webApi from 'api/webApiHelper';
import { TypeFilter } from 'common/models/typeFilterBuilder';
import { TypeRam } from 'common/models/typeRam';
import { RamCreationAttributes } from 'common/models/ram';

export type TypeResponseAllRams = {
  meta: {
    globalCount: number;
    countAfterFiltering: number;
  };
  data: TypeRam[];
};

const endpoint = '/rams';

export const getAllRam = async (filter: TypeFilter): Promise<TypeResponseAllRams> => {
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

export const postRam = async (request: RamCreationAttributes): Promise<TypeRam> => {
  return await webApi.post(endpoint, request);
};
