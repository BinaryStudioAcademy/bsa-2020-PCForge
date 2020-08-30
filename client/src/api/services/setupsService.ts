import webApi from 'api/webApiHelper';
import { Setup } from 'common/models/setup';

const endpoint = '/setups';

export type TypeResponseSetups = {
  meta: {
    globalCount: number;
  };
  data: Setup[];
};

type Sort = 'mostRated' | 'newest' | 'oldest' | 'commendable';

export interface ISetupFilter {
  from?: number;
  count?: number;
  sort?: Sort;
}

export const getAllSetups = async (filter?: ISetupFilter): Promise<TypeResponseSetups> => {
  const setups = await webApi.get(endpoint, filter);
  return setups;
};
