import { notNull } from './repositoriesTypes';

export interface IFilter {
  from: number;
  count: number;
}

export const FilterDefaults: IFilter = {
  from: 0,
  count: 50,
};

export interface ICpuFilter extends IFilter {
  socketId: string | Record<string, unknown>;
}

export const CpuFilterDefaults: ICpuFilter = {
  from: 0,
  count: 50,
  socketId: notNull,
};

export interface IRamFilter extends IFilter {
  typeId: string | Record<string, unknown>;
}

export const RamFilterDefaults: IRamFilter = {
  from: 0,
  count: 50,
  typeId: notNull,
};

export interface IMotherboardFilter extends IFilter {
  ramTypeId: string | Record<string, unknown>;
  socketId: string | Record<string, unknown>;
}

export const MotherboardFilterDefaults: IMotherboardFilter = {
  from: 0,
  count: 50,
  ramTypeId: notNull,
  socketId: notNull,
};
