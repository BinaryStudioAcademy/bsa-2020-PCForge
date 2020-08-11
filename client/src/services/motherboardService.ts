import webApi from '../helpers/webApiHelper';
import { TypeFilter } from '../models/typeFilterBuilder';
import { TypeMotherboard } from '../models/typeMotherboard';

type TypeResponseAll = {
  meta: {
    globalCount: string;
  };
  data: TypeMotherboard[];
};

const endpoint = '/api/motherboards';

export const getAllMotherboard = async (filter: TypeFilter): Promise<TypeResponseAll> => {
  return await webApi.get(endpoint, filter);
};

export const getMotherboard = async (id: number): Promise<TypeMotherboard> => {
  return await webApi.get(`${endpoint}/${id}`);
};

export const updateMotherboard = async (request: TypeMotherboard): Promise<TypeMotherboard> => {
  return await webApi.put(`${endpoint}/${request.id}`, request);
};

export const deleteMotherboard = async (id: number): Promise<void> => {
  return await webApi.delete(`${endpoint}/${id}`);
};
