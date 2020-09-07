import { getAllCpu } from 'api/services/cpuService';
import { getAllGpu } from 'api/services/gpuService';
import { getAllRam } from 'api/services/ramService';
import { getAllMotherboard } from 'api/services/motherboardService';
import { getAllPowersupplies } from 'api/services/powersupplyService';
import { getAllHdd } from 'api/services/hddService';
import { getAllSsd } from 'api/services/ssdService';
import { getAllStorage } from 'api/services/storageService';
import { TypeFilterRangeInfo } from './types';

export enum GroupName {
  cpu = 'cpu',
  gpu = 'gpu',
  ram = 'ram',
  motherboard = 'motherboard',
  powersupply = 'powersupply',
  hdd = 'hdd',
  ssd = 'ssd',
  storage = 'storage',
}

export enum FilterName {
  socket = 'socketId',
  ramtype = 'ramTypeId',
  hdd = 'sata',
}

export const servicesGetAll = {
  [GroupName.cpu]: getAllCpu,
  [GroupName.gpu]: getAllGpu,
  [GroupName.ram]: getAllRam,
  [GroupName.motherboard]: getAllMotherboard,
  [GroupName.powersupply]: getAllPowersupplies,
  [GroupName.hdd]: getAllHdd,
  [GroupName.ssd]: getAllSsd,
  [GroupName.storage]: getAllStorage,
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
  [GroupName.hdd]: {
    title: 'Capacity',
    unit: 'Gb',
    key: 'capacity',
    min: 20,
    max: 20000,
    step: 200,
  },
  [GroupName.ssd]: {
    title: 'Capacity',
    unit: 'Gb',
    key: 'capacity',
    min: 20,
    max: 20000,
    step: 200,
  },
  [GroupName.storage]: {
    title: 'Capacity',
    unit: 'Gb',
    key: 'capacity',
    min: 20,
    max: 20000,
    step: 200,
  },
};
