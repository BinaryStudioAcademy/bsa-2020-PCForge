import webApi from 'api/webApiHelper';
import { TopGame } from 'common/models/topGame';

export type TypeResponseAll = {
  meta: {
    globalCount: number;
    countAfterFiltering: number;
  };
  data: TopGame[];
};

export interface IFilter {
  from: number;
  count: number;
}

const endpoint = '/topGames';

export const getAllTopGames = async (filter: IFilter): Promise<TypeResponseAll> => {
  return await webApi.get(endpoint, filter);
};
