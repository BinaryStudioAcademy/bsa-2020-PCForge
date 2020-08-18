import webApi from 'api/webApiHelper';
import { SetupComment } from 'common/models/comment';
import { Setup } from 'common/models/setup';

export type TypeResponseAllSetups = {
  meta: {
    globalCount: number;
    countAfterFiltering: number;
  };
  data: SetupComment[];
};

const endpoint = '/setups';

export const getSetupById = async (id: number): Promise<Setup> => {
  const setup: Setup = await webApi.get(endpoint + '/' + id);
  return setup;
};
