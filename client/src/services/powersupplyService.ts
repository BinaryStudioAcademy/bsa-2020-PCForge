import callWebApi from '../helpers/webApiHelper';
import { TypeFilter } from '../models/typeFilter';
import { TypePowersupplies } from '../models/typePowersupplies';

const endpoint = '/api/powerSupplies';

export const getAllPowersupplies = async (filter: TypeFilter): Promise<TypePowersupplies[]> => {
  const response = await callWebApi({
    endpoint,
    type: 'GET',
    query: filter,
  });
  return response.json();
};

export const getPowersupplies = async (id: number): Promise<TypePowersupplies> => {
  const response = await callWebApi({
    endpoint: `${endpoint}/${id}`,
    type: 'GET',
  });
  return response.json();
};

export const updatePowersupplies = async (request: TypePowersupplies): Promise<TypePowersupplies> => {
  const response = await callWebApi({
    endpoint: `${endpoint}/${request.id}`,
    type: 'PUT',
    request,
  });
  return response.json();
};

export const deletePowersupplies = async (id: number): Promise<{}> => {
  const response = await callWebApi({
    endpoint: `${endpoint}/${id}`,
    type: 'DELETE',
  });
  return response.json();
};
