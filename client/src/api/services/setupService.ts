import webApi from 'api/webApiHelper';
import { Setup } from 'common/models/setup';

export type TypeResponseOne = Setup;

const endpoint = '/setups/';

export const getSetup = async (id: number): Promise<TypeResponseOne> => {
  const url = `${endpoint}/${id}`;
  return await webApi.get(url);
};
