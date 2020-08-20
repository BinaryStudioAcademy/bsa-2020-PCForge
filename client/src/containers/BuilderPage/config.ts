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
    min: 1000,
    max: 4000,
    step: 100,
  },
  [GroupName.gpu]: {
    title: 'Memory size',
    unit: 'Mb',
    key: 'memorySize',
    min: 100,
    max: 10000,
    step: 100,
  },
  [GroupName.ram]: {
    title: 'Memory size',
    unit: 'Gb',
    key: 'memorySize',
    min: 1,
    max: 64,
    step: 1,
  },
  // [GroupName.motherboard]: {},
  [GroupName.powersupply]: {
    title: 'Power',
    unit: 'W',
    key: 'power',
    min: 50,
    max: 1500,
    step: 50,
  },
};
