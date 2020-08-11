import callWebApi from '../helpers/webApiHelper';
import { TypeFilter } from '../models/typeFilter';
import { TypeCpu } from '../models/typeCpu';

const endpoint = '/api/cpus';

export const getAllCpu = async (filter: TypeFilter): Promise<TypeCpu[]> => {
  const response = await callWebApi({
    endpoint,
    type: 'GET',
    query: filter,
  });
  return response.json();
};

export const getCpu = async (id: number): Promise<TypeCpu> => {
  const response = await callWebApi({
    endpoint: `${endpoint}/${id}`,
    type: 'GET',
  });
  return response.json();
};

export const updateCpu = async (request: TypeCpu): Promise<TypeCpu> => {
  const response = await callWebApi({
    endpoint: `${endpoint}/${request.id}`,
    type: 'PUT',
    request,
  });
  return response.json();
};

export const deleteCpu = async (id: number): Promise<{}> => {
  const response = await callWebApi({
    endpoint: `${endpoint}/${id}`,
    type: 'DELETE',
  });
  return response.json();
};
