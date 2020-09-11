import webApi from '../webApi.helper';
import { GpuFilter } from 'common/models/filter.model';
import { Gpu, GpuCreationAttributes } from 'common/models/gpu';

export type TypeResponseAllGpus = {
  meta: {
    globalCount: number;
    countAfterFiltering: number;
  };
  data: Gpu[];
};

const endpoint = '/gpus';

export const getAllGpu = async (filter: GpuFilter): Promise<TypeResponseAllGpus> => {
  return await webApi.get(endpoint, filter);
};

export const getGpu = async (id: number): Promise<Gpu> => {
  return await webApi.get(`${endpoint}/${id}`);
};

export const updateGpu = async (request: Gpu): Promise<Gpu> => {
  return await webApi.put(`${endpoint}/${request.id}`, request);
};

export const deleteGpu = async (id: number): Promise<void> => {
  return await webApi.delete(`${endpoint}/${id}`);
};

export const postGpu = async (request: GpuCreationAttributes): Promise<Gpu> => {
  return await webApi.post(endpoint, request);
};
