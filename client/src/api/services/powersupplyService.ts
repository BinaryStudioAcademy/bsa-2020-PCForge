import webApi from 'api/webApiHelper';
import { TypeFilter } from 'common/models/typeFilterBuilder';
import { TypePowersupplies } from 'common/models/typePowersupplies';
import { PowerSupplyCreationAttributes } from 'common/models/powerSupply';

export type TypeResponseAll = {
  meta: {
    globalCount: number;
    countAfterFiltering: number;
  };
  data: TypePowersupplies[];
};

const endpoint = '/powerSupplies';

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
export const postPowerSupply = async (request: PowerSupplyCreationAttributes): Promise<TypePowersupplies> => {
  return await webApi.post(endpoint, request);
};
