import callWebApi from '../helpers/webApiHelper';
import { TypeFilter } from '../models/typeFilter';
import { TypeRam } from '../models/typeRam';

const endpoint = '/api/rams';

export const getAllRam = async (filter: TypeFilter): Promise<TypeRam[]> => {
  const response = await callWebApi({
    endpoint,
    type: 'GET',
    query: filter,
  });
  return response.json();
};

export const getRam = async (id: number): Promise<TypeRam> => {
  const response = await callWebApi({
    endpoint: `${endpoint}/${id}`,
    type: 'GET',
  });
  return response.json();
};

export const updateRam = async (request: TypeRam): Promise<TypeRam> => {
  const response = await callWebApi({
    endpoint: `${endpoint}/${request.id}`,
    type: 'PUT',
    request,
  });
  return response.json();
};

export const deleteRam = async (id: number): Promise<{}> => {
  const response = await callWebApi({
    endpoint: `${endpoint}/${id}`,
    type: 'DELETE',
  });
  return response.json();
};
