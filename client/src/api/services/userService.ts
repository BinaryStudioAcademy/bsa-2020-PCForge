import webApi from 'api/webApiHelper';
import { TypeUser } from 'common/models/typeUser';
import { Game } from 'common/models/game';

const endpoint = '/users';

export const getUser = async (id: number): Promise<TypeUser> => {
  return await webApi.get(`${endpoint}/${id}`);
};

export const updateUser = async (request: TypeUser): Promise<TypeUser> => {
  return await webApi.put(`${endpoint}/${request.id}`, request);
};

export const deleteUser = async (id: number): Promise<void> => {
  return await webApi.delete(`${endpoint}/${id}`);
};

export const getUserGames = async (id: number): Promise<Game> => {
  return await webApi.get(`${endpoint}/${id}/games`);
}