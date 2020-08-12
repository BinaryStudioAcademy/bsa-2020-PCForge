import webApi from 'helpers/webApiHelper';
import { TypeUser } from 'models/typeUser';

const endpoint = '/api/users';
  
export const getUser = async (id:number): Promise<TypeUser> => {
    return await webApi.get(`${endpoint}/${id}`);
};

export const updateUser = async (request: TypeUser, oldPassword?: string): Promise<TypeUser> => {
    return await webApi.put(`${endpoint}/${request.id}`, {...request, oldPassword});
};

export const deleteUser = async (id:number): Promise<void> => {
    return await webApi.delete(`${endpoint}/${id}`);
};