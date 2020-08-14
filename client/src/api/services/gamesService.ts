import webApi from 'api/webApiHelper';
import { TypeFilter } from 'common/models/typeFilterBuilder';
import { TypeGpu } from 'common/models/typeGpu';
import { Game } from 'common/models/game';

export type TypeResponseAllGames = {
  meta: {
    globalCount: number;
    countAfterFiltering: number;
  };
  data: Game[];
};

const endpoint = '/games';

export const getAllGames = async (filter: TypeFilter): Promise<TypeResponseAllGames> => {
  return await webApi.get(endpoint, filter);
};

export const getGame = async (id: number): Promise<Game> => {
  return await webApi.get(`${endpoint}/${id}`);
};

export const updateGame = async (request: Game): Promise<Game> => {
  return await webApi.put(`${endpoint}/${request.id}`, request);
};

export const deleteGame = async (id: number): Promise<void> => {
  return await webApi.delete(`${endpoint}/${id}`);
};
