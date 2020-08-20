import webApi from 'api/webApiHelper';
import { RateFilter } from 'common/models/filter.model';
import { RateCreationAttributes, Rate } from 'common/models/rate.model';

export type ResponseGetAverageRate = {
  average: number;
};

const baseEndpoint = '/rates';

export const getAverageRate = async (filter: RateFilter): Promise<ResponseGetAverageRate> => {
  const endpoint = baseEndpoint + '/average';
  return await webApi.get(endpoint, filter);
};

export const addRate = async (data: RateCreationAttributes): Promise<Rate> => {
  return await webApi.post(baseEndpoint, data);
};
