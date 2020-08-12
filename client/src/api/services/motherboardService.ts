import webApi from 'api/webApiHelper';
import { TypeFilter } from 'api/models/typeFilterBuilder';
import { TypeMotherboard } from 'api/models/typeMotherboard';

type TypeResponseAll = {
  meta: {
    globalCount: number;
    countAfterFiltering: number;
  };
  data: TypeMotherboard[];
};

const endpoint = '/motherboards';

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
