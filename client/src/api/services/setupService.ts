import webApi from 'api/webApiHelper';
import { SetupType } from 'common/models/typeSetup';
import { Setup } from 'common/models/setup';

export type TypeResponseAll = {
  meta: {
    globalCount: number;
    countAfterFiltering: number;
  };
  data: SetupType[];
};

export type TypeResponseOne = Setup;

export interface ITopSetupFilter {
  from?: number;
  count?: number;
}

export interface IUserSetupFilter {
  authorId: number;
}

const endpoint = '/setups';

export const getTopSetups = async (filter: ITopSetupFilter): Promise<TypeResponseAll> => {
  return await webApi.get(endpoint, filter);
};

export const getUserSetups = async (filter: IUserSetupFilter): Promise<TypeResponseAll> => {
  return await webApi.get(endpoint, filter);
};

export const getSetup = async (id: number): Promise<TypeResponseOne> => {
  const url = `${endpoint}/${id}`;
  return await webApi.get(url);
};

export const deleteUserSetup = async (setupId: number): Promise<TypeResponseOne> => {
  const url = `${endpoint}/${setupId}`;
  return await webApi.delete(url);
};

export const forkUserSetup = async (setupId: number): Promise<TypeResponseOne> => {
  const url = `${endpoint}/forks`;
  return await webApi.post(url, { setupId });
};
