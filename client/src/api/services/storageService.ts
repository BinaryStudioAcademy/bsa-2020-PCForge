import webApi from 'api/webApiHelper';
import { TypeFilter } from 'common/models/typeFilterBuilder';
import { TypeStorage } from 'common/models/typeStorage';

export type TypeResponseAllStorages = {
  meta: {
    globalCount: number;
    countAfterFiltering: number;
  };
  data: TypeStorage[];
};

const endpoint = '/storages';

export const getAllStorage = async (filter: TypeFilter): Promise<TypeResponseAllStorages> => {
  if (filter.name) filter.name = encodeURIComponent(filter.name);
  return await webApi.get(endpoint, filter);
};
