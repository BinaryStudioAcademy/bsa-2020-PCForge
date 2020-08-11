import callWebApi from '../helpers/webApiHelper';
import { TypeRamType } from '../models/typeRamType';

const endpoint = '/api/ramTypes';

export const getAllRamType = async (): Promise<TypeRamType[]> => {
  const response = await callWebApi({
    endpoint,
    type: 'GET',
  });
  return response.json();
};

export const getRamType = async (id: number): Promise<TypeRamType> => {
  const response = await callWebApi({
    endpoint: `${endpoint}/${id}`,
    type: 'GET',
  });
  return response.json();
};

export const updateRamType = async (request: TypeRamType): Promise<TypeRamType> => {
  const response = await callWebApi({
    endpoint: `${endpoint}/${request.id}`,
    type: 'PUT',
    request,
  });
  return response.json();
};

export const deleteRamType = async (id: number): Promise<{}> => {
  const response = await callWebApi({
    endpoint: `${endpoint}/${id}`,
    type: 'DELETE',
  });
  return response.json();
};
