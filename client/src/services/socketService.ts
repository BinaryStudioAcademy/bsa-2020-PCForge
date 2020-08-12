import webApi from '../helpers/webApiHelper';
import { TypeFilter } from '../models/typeFilterBuilder';
import { TypeSocket } from '../models/typeSocket';

type TypeResponseAll = {
  meta: {
    globalCount: number;
    countAfterFiltering: number;
  };
  data: TypeSocket[];
};

const endpoint = '/api/sockets';

export const getAllSocket = async (filter: TypeFilter): Promise<TypeResponseAll> => {
  return await webApi.get(endpoint, filter);
};

export const getSocket = async (id: number): Promise<TypeSocket> => {
  return await webApi.get(`${endpoint}/${id}`);
};

export const updateSocket = async (request: TypeSocket): Promise<TypeSocket> => {
  return await webApi.put(`${endpoint}/${request.id}`, request);
};

export const deleteSocket = async (id: number): Promise<void> => {
  return await webApi.delete(`${endpoint}/${id}`);
};
