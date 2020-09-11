import webApi from 'api/webApiHelper';
import { Game, GameCreationAttributes } from 'common/models/game';

export type TypeResponseAll = {
  meta: {
    globalCount: number;
    countAfterFiltering: number;
  };
  data: Game[];
};

export interface IGameFilter {
  name?: string;
  from?: number;
  count?: number;
  sort?: string;
}

const endpoint = '/games';

export const getAllGames = async (filter: IGameFilter): Promise<TypeResponseAll> => {
  return await webApi.get(endpoint, filter);
};

export const postGame = async (data: GameCreationAttributes): Promise<Game> => {
  return await webApi.post(endpoint, data);
};
