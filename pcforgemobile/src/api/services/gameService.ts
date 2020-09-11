import webApi from '../webApi.helper';
import { GameFilter } from 'common/models/filter.model';
import { Game } from 'common/models/game';

export type TypeResponseAllGames = {
  meta: {
    globalCount: number;
    countAfterFiltering: number;
  };
  data: Game[];
};

const endpoint = '/games';

export const getAllGames = async (filter: GameFilter): Promise<TypeResponseAllGames> => {
  const response = await webApi.get(endpoint, filter);
  return response;
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
