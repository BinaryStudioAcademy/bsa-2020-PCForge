import webApi from '../helpers/webApiHelper';
import { TypeFilter } from '../models/typeFilterBuilder';
import { TypePowersupplies } from '../models/typePowersupplies';

type TypeResponseAll = {
  meta: {
    globalCount: string;
    countAfterFiltering: string;
  };
  data: TypePowersupplies[];
};

const endpoint = '/api/powerSupplies';

export const getAllPowersupplies = async (filter: TypeFilter): Promise<TypeResponseAll> => {
  return await webApi.get(endpoint, filter);
};

export const getPowersupplies = async (id: number): Promise<TypePowersupplies> => {
  return await webApi.get(`${endpoint}/${id}`);
};

export const updatePowersupplies = async (request: TypePowersupplies): Promise<TypePowersupplies> => {
  return await webApi.put(`${endpoint}/${request.id}`, request);
};

export const deletePowersupplies = async (id: number): Promise<void> => {
  return await webApi.delete(`${endpoint}/${id}`);
};
