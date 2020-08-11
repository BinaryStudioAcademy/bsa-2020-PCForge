import callWebApi from '../helpers/webApiHelper';
import { TypeFilter } from '../models/typeFilter';
import { TypeMotherboard } from '../models/typeMotherboard';

const endpoint = '/api/motherboards';

export const getAllMotherboard = async (filter: TypeFilter): Promise<TypeMotherboard[]> => {
  const response = await callWebApi({
    endpoint,
    type: 'GET',
    query: filter,
  });
  return response.json();
};

export const getMotherboard = async (id: number): Promise<TypeMotherboard> => {
  const response = await callWebApi({
    endpoint: `${endpoint}/${id}`,
    type: 'GET',
  });
  return response.json();
};

export const updateMotherboard = async (request: TypeMotherboard): Promise<TypeMotherboard> => {
  const response = await callWebApi({
    endpoint: `${endpoint}/${request.id}`,
    type: 'PUT',
    request,
  });
  return response.json();
};

export const deleteMotherboard = async (id: number): Promise<{}> => {
  const response = await callWebApi({
    endpoint: `${endpoint}/${id}`,
    type: 'DELETE',
  });
  return response.json();
};
