import { Cpu } from './cpu';
import { Game } from './game';
import { Gpu } from './gpu';
import { Motherboard } from './motherboard';
import { PowerSupply } from './powerSupply';
import { Ram } from './ram';
import { Setup } from './setup';
import { ISetupPerformance } from './setupPerformance';

export const defaultGpu: Gpu = {
  id: 0,
  performance: 0,
  interface: '',
  coreClocks: 0,
  opengl: '0',
  memorySize: 0,
  name: '',
  tdp: 0,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const defaultMotherboard: Motherboard = {
  id: 0,
  name: '',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const defaultPowerSupply: PowerSupply = {
  id: 0,
  name: '',
  power: 0,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const defaultRam: Ram = {
  id: 0,
  name: '',
  memorySize: 0,
  frequency: 0,
  power: 0,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const defaultCpu: Cpu = {
  id: 0,
  performance: 0,
  name: '',
  clockspeed: 0,
  tdp: 0,
  cores: 0,
  class: '',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const defaultSetup: Setup = {
  id: 0,
  rating: 0,
  ownRating: 0,
  ratingCount: 0,
  title: '',
  image: '',
  comments_count: '',
  description: '',
  cpu: defaultCpu,
  gpu: defaultGpu,
  ram: defaultRam,
  motherBoard: defaultMotherboard,
  powerSupply: defaultPowerSupply,
  createdAt: new Date(),
  updatedAt: new Date(),
  ramCount: 0,
};

export const defaultPerformance: ISetupPerformance = {
  fpsAnalysis: [],
  report: {
    minimal: {
      cpu: 100,
      gpu: 100,
      ram: 100,
    },
    recommended: {
      cpu: 100,
      gpu: 100,
      ram: 100,
    },
  },
  overall: {
    cpu: 0,
    gpu: 0,
    ram: 0,
  },
};

export const defaultGame: Game = {
  id: -1,
  name: '',
  year: 0,
  description: '',
  image: '',
  recommendedRamSize: 0,
  minimalRamSize: 0,
  recommendedCpu: defaultCpu,
  minimalCpu: defaultCpu,
  recommendedGpu: defaultGpu,
  minimalGpu: defaultGpu,
  createdAt: new Date(),
  updatedAt: new Date(),
  rating: 0,
  ownRating: 0,
  ratingCount: 0,
  comments_count: '',
};
