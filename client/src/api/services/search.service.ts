import webApi from 'api/webApiHelper';
import { SearchResponse } from 'common/models/search';

const endpoint = '/search';

export const getSearchResponse = async (searchString: string): Promise<SearchResponse> => {
  const filter = {
    q: searchString,
  };
  return await webApi.get(`${endpoint}/all`, filter);
};
