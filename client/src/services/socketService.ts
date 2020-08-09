import callWebApi from '../helpers/webApiHelper';
import { TypeSocket } from '../models/typeSocket';

const endpoint = '/api/sockets';

export const getAllSocket = async (): Promise<TypeSocket[]> => {
  const response = await callWebApi({
    endpoint,
    type: 'GET',
  });
  return response.json();
};

export const getSocket = async (id: number): Promise<TypeSocket> => {
  const response = await callWebApi({
    endpoint: `${endpoint}/${id}`,
    type: 'GET',
  });
  return response.json();
};

export const updateSocket = async (request: TypeSocket): Promise<TypeSocket> => {
  const response = await callWebApi({
    endpoint: `${endpoint}/${request.id}`,
    type: 'PUT',
    request,
  });
  return response.json();
};

export const deleteSocket = async (id: number): Promise<{}> => {
  const response = await callWebApi({
    endpoint: `${endpoint}/${id}`,
    type: 'DELETE',
  });
  return response.json();
};
