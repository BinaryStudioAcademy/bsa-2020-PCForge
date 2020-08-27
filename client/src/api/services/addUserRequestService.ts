import webApi from 'api/webApiHelper';
import { TypeUsersRequests, TypeUsersRequestsCreationAttributes } from 'common/models/typeUsersRequests';
import { UserRequestedType } from 'common/enums/UserRequestedType';

type TypeResponseAll = {
  meta: {
    globalCount: number;
    countAfterFiltering: number;
  };
  data: TypeUsersRequests[];
};

export interface IUserRequestFilter {
  requestedType?: UserRequestedType;
  userId?: number;
}

const endpoint = '/addRequest';

export const getAllUsersRequsts = async (filter: IUserRequestFilter): Promise<TypeResponseAll> => {
  return await webApi.get(endpoint, filter);
};

export const getUserRequest = async (id: number): Promise<TypeUsersRequests> => {
  return await webApi.get(`${endpoint}/${id}`);
};

export const updateUserRequest = async (request: TypeUsersRequests): Promise<TypeUsersRequests> => {
  return await webApi.put(`${endpoint}/${request.id}`, request);
};

export const deleteUserRequest = async (id: number): Promise<void> => {
  return await webApi.delete(`${endpoint}/${id}`);
};

export const postUserRequest = async (request: TypeUsersRequestsCreationAttributes): Promise<TypeUsersRequests> => {
  return await webApi.post(`${endpoint}`, request);
};

