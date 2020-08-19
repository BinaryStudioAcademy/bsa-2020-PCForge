import webApi from 'api/webApiHelper';
import { SetupType } from 'common/models/typeSetup';

export type TypeResponseAll = {
  meta: {
    globalCount: number;
    countAfterFiltering: number;
  };
  data: SetupType[];
};

export interface ITopSetupFilter {
  from?: number;
  count?: number;
}

const endpoint = '/setups';

export const getTopSetups = async (filter: ITopSetupFilter): Promise<TypeResponseAll> => {
  return await webApi.get(endpoint, filter);
};
