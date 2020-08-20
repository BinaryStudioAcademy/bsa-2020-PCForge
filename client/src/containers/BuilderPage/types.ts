import { TypeCpu } from 'common/models/typeCpu';
import { TypeGpu } from 'common/models/typeGpu';
import { TypeRam } from 'common/models/typeRam';
import { TypeMotherboard } from 'common/models/typeMotherboard';
import { TypePowersupplies } from 'common/models/typePowersupplies';

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

export enum ComponentGroups {
  cpu,
  gpu,
  ram,
  motherboard,
  powersupply,
}
