import { FilterByIdType, notNull } from './repositoriesTypes';

export interface IFilter {
  from: number;
  count: number;
}

export const FilterDefaults: IFilter = {
  from: 0,
  count: 50,
};

export interface ICpuFilter extends IFilter {
  socketId: FilterByIdType;
}

export const CpuFilterDefaults: ICpuFilter = {
  from: 0,
  count: 50,
  socketId: notNull,
};

export interface IRamFilter extends IFilter {
  typeId: FilterByIdType;
}

export const RamFilterDefaults: IRamFilter = {
  from: 0,
  count: 50,
  typeId: notNull,
};

export interface IMotherboardFilter extends IFilter {
  ramTypeId: FilterByIdType;
  socketId: FilterByIdType;
}

export const MotherboardFilterDefaults: IMotherboardFilter = {
  from: 0,
  count: 50,
  ramTypeId: notNull,
  socketId: notNull,
};
