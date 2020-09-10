import webApi from 'api/webApiHelper';
import { TypeFilter } from 'common/models/typeFilterBuilder';
import { TypeMotherboard } from 'common/models/typeMotherboard';
import { MotherboardCreationAttributes } from 'common/models/motherboard';
import { MotherboardFilter } from 'common/models/filter.model';

export type TypeResponseAll = {
  meta: {
    globalCount: number;
    countAfterFiltering: number;
  };
  data: TypeMotherboard[];
};

const endpoint = '/motherboards';

export const getAllMotherboard = async (filter: MotherboardFilter): Promise<TypeResponseAll> => {
  if (filter.name) filter.name = encodeURIComponent(filter.name);
  const ramTypeMultiple: boolean = filter.ramTypeId?.includes(',') || false;
  const socketIdMultiple: boolean = filter.socketId?.includes(',') || false;
  const isSataMultiple: boolean = filter.sata?.includes(',') || false;

  const serverFilter: MotherboardFilter = {
    count: filter.count,
    from: filter.from,
    m2: filter.m2,
    name: filter.name,
    ...(ramTypeMultiple && { ramTypeIds: filter.ramTypeId }),
    ...(!ramTypeMultiple && { ramTypeId: filter.ramTypeId }),
    ...(socketIdMultiple && { socketIds: filter.socketId }),
    ...(!socketIdMultiple && { socketId: filter.socketId }),
    ...(isSataMultiple && { sataMultiple: filter.sata }),
    ...(!isSataMultiple && { sata: filter.sata }),
  };

  return await webApi.get(endpoint, serverFilter);
};

export const getMotherboard = async (id: number): Promise<TypeMotherboard> => {
  return await webApi.get(`${endpoint}/${id}`);
};

export const updateMotherboard = async (request: TypeMotherboard): Promise<TypeMotherboard> => {
  return await webApi.put(`${endpoint}/${request.id}`, request);
};

export const deleteMotherboard = async (id: number): Promise<void> => {
  return await webApi.delete(`${endpoint}/${id}`);
};

export const postMotherBoard = async (request: MotherboardCreationAttributes): Promise<TypeMotherboard> => {
  return await webApi.post(endpoint, request);
};
