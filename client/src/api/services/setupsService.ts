import webApi from 'api/webApiHelper';
import { Setup } from 'common/models/setup';

const endpoint = '/setups';

export type TypeResponseSetups = {
  meta: {
    globalCount: number;
  };
  data: Setup[];
};

export const getAllSetups = async (): Promise<TypeResponseSetups> => {
  const setups = await webApi.get(endpoint);
  console.log('setup', setups);
  return setups;
};
