import webApi from 'api/webApiHelper';
import { TypeAddNews, TypeNews } from 'common/models/typeNews';

const endpoint = '/news';

export const getAllNews = async (): Promise<TypeNews[]> => {
  return await webApi.get(endpoint);
};

export const getNews = async (id: string): Promise<TypeNews> => {
  return await webApi.get(`${endpoint}/${id}`);
};

export const addNews = async (request: TypeAddNews): Promise<TypeNews> => {
  return await webApi.post(endpoint, request);
};

export const updateNews = async (request: TypeNews): Promise<TypeNews> => {
  return await webApi.put(`${endpoint}/${request.id}`, request);
};

export const deleteNews = async (id: number): Promise<void> => {
  return await webApi.delete(`${endpoint}/${id}`);
};
