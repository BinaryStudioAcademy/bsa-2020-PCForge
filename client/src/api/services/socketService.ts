import webApi from 'api/webApiHelper';
import { TypeFilter } from 'common/models/typeFilterBuilder';
import { TypeSocket } from 'common/models/typeSocket';

export type TypeResponseAll = {
  meta: {
    globalCount: number;
    countAfterFiltering: number;
  };
  data: TypeSocket[];
};

const endpoint = '/sockets';

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
