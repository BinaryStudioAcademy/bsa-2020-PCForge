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
  return await webApi.get(endpoint);
};
