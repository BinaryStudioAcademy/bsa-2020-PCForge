import webApi from 'api/webApiHelper';
import { SetupItem } from 'common/models/setup';

const endpoint = '/setups';

export const createSetup = async (request: SetupItem): Promise<SetupItem> => {
  return await webApi.post(endpoint, request);
};
