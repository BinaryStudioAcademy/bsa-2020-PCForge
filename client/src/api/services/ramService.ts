import webApi from 'api/webApiHelper';
import { TypeFilter } from 'common/models/typeFilterBuilder';
import { TypeRam } from 'common/models/typeRam';
import { RamCreationAttributes } from 'common/models/ram';
import { RamFilter } from 'common/models/filter.model';

export type TypeResponseAllRams = {
  meta: {
    globalCount: number;
    countAfterFiltering: number;
  };
  data: TypeRam[];
};

const endpoint = '/rams';

export const getAllRam = async (filter: RamFilter): Promise<TypeResponseAllRams> => {
  const isMultipleType: boolean = filter.typeId?.includes(',') || false;

  const serverFilter: RamFilter = {
    name: filter.name,
    from: filter.from,
    count: filter.count,
    'memorySize[minValue]': filter['memorySize[minValue]'],
    'memorySize[maxValue]': filter['memorySize[maxValue]'],
    ...(isMultipleType && { typeIds: filter.typeId }),
    ...(!isMultipleType && { typeId: filter.typeId }),
  };

  return await webApi.get(endpoint, serverFilter);
};

export const getRam = async (id: number): Promise<TypeRam> => {
  return await webApi.get(`${endpoint}/${id}`);
};

export const updateRam = async (request: TypeRam): Promise<TypeRam> => {
  return await webApi.put(`${endpoint}/${request.id}`, request);
};

export const deleteRam = async (id: number): Promise<void> => {
  return await webApi.delete(`${endpoint}/${id}`);
};

export const postRam = async (request: RamCreationAttributes): Promise<TypeRam> => {
  return await webApi.post(endpoint, request);
};
