import webApi from 'api/webApiHelper';
import { Game } from 'common/models/game';

export type TypeResponseAll = {
  meta: {
    globalCount: number;
    countAfterFiltering: number;
  };
  data: Game[];
};

export interface IGameFilter {
  name: string;
  from: number;
  count: number;
}

const endpoint = '/games';

export const getAllGames = async (filter: IGameFilter): Promise<TypeResponseAll> => {
  return await webApi.get(endpoint, filter);
};
