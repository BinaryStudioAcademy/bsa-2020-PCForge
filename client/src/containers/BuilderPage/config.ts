import { getAllCpu } from 'api/services/cpuService';
import { getAllGpu } from 'api/services/gpuService';
import { getAllRam } from 'api/services/ramService';
import { getAllMotherboard } from 'api/services/motherboardService';
import { getAllPowersupplies } from 'api/services/powersupplyService';
import { TypeFilterRangeInfo } from './types';

export enum GroupName {
  cpu = 'cpu',
  gpu = 'gpu',
  ram = 'ram',
  motherboard = 'motherboard',
  powersupply = 'powersupply',
}

export enum FilterName {
  socket = 'socketId',
  ramtype = 'ramTypeId',
}

export const servicesGetAll = {
  [GroupName.cpu]: getAllCpu,
  [GroupName.gpu]: getAllGpu,
  [GroupName.ram]: getAllRam,
  [GroupName.motherboard]: getAllMotherboard,
  [GroupName.powersupply]: getAllPowersupplies,
};

export const filterRangeInfo: TypeFilterRangeInfo = {
  [GroupName.cpu]: {
    title: 'Processor Frequency',
    unit: 'MHz',
    key: 'clockspeed',
  },
  [GroupName.gpu]: {
    title: 'Memory size',
    unit: 'Mb',
    key: 'memorySize',
  },
  [GroupName.ram]: {
    title: 'Memory size',
    unit: 'Gb',
    key: 'memorySize',
  },
  // [GroupName.motherboard]: {},
  [GroupName.powersupply]: {
    title: 'Power',
    unit: 'W',
    key: 'power',
  },
};
