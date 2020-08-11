import callWebApi from '../helpers/webApiHelper';
import { TypeFilter } from '../models/typeFilter';
import { TypeGpu } from '../models/typeGpu';

const endpoint = '/api/gpus';

export const getAllGpu = async (filter: TypeFilter): Promise<TypeGpu[]> => {
  const response = await callWebApi({
    endpoint,
    type: 'GET',
    query: filter,
  });
  return response.json();
};

export const getGpu = async (id: number): Promise<TypeGpu> => {
  const response = await callWebApi({
    endpoint: `${endpoint}/${id}`,
    type: 'GET',
  });
  return response.json();
};

export const updateGpu = async (request: TypeGpu): Promise<TypeGpu> => {
  const response = await callWebApi({
    endpoint: `${endpoint}/${request.id}`,
    type: 'PUT',
    request,
  });
  return response.json();
};

export const deleteGpu = async (id: number): Promise<{}> => {
  const response = await callWebApi({
    endpoint: `${endpoint}/${id}`,
    type: 'DELETE',
  });
  return response.json();
};
