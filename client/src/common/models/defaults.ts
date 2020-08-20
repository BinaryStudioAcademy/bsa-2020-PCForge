import { Cpu } from './cpu';
import { Gpu } from './gpu';
import { Motherboard } from './motherboard';
import { PowerSupply } from './powerSupply';
import { Ram } from './ram';
import { Setup } from './setup';

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
  title: '',
  image: '',
  description: '',
  cpu: defaultCpu,
  gpu: defaultGpu,
  ram: defaultRam,
  motherBoard: defaultMotherboard,
  powerSupply: defaultPowerSupply,
  createdAt: new Date(),
  updatedAt: new Date(),
};
