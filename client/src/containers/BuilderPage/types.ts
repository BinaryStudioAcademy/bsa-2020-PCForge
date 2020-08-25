import { TypeCpu } from 'common/models/typeCpu';
import { TypeGpu } from 'common/models/typeGpu';
import { TypeRam } from 'common/models/typeRam';
import { TypeMotherboard } from 'common/models/typeMotherboard';
import { TypePowersupplies } from 'common/models/typePowersupplies';
import { GroupName } from './config';

export type TypeBuild = {
  cpu: TypeCpu;
  gpu: TypeGpu;
  ram: TypeRam;
  motherboard: TypeMotherboard;
  powersupplies: TypePowersupplies;
};

export type TypeComponent = TypeCpu | TypeGpu | TypeRam | TypeMotherboard | TypePowersupplies;

export type TypeFilterBuilder = {
  socketIdSet: Set<number>;
  ramTypeIdSet: Set<number>;
};

export type TypeShowFilters = {
  socket: boolean;
  ramType: boolean;
};

export type TypeGroupConfig = {
  group: GroupName;
  title?: string;
  filter: TypeFilterBuilder;
  filters: {
    // todo: Индексируемые типы
    // [Filter.socket]?: {
    //   show: boolean;
    //   enable: boolean;
    // };
    // [Filter.ramtype]?: {
    //   show: boolean;
    //   enable: boolean;
    // };
    [index: string]: {
      enable: boolean;
    };
  };
};

export type TypeFilterRangeInfo = {
  [index: string]: {
    title?: string;
    unit?: string;
    key?: string;
    min?: number;
    max?: number;
    step?: number;
  };
};

export enum ComponentGroups {
  cpu,
  gpu,
  ram,
  motherboard,
  powersupply,
}
