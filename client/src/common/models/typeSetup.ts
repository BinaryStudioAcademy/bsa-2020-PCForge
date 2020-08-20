import { Cpu } from './cpu';
import { Gpu } from './gpu';
import { Ram } from './ram';
import { Motherboard } from './motherboard';
import { PowerSupply } from './powerSupply';

export type SetupType = {
  id: number;
  title: string;
  description: string;
  image: string;
  cpu: Cpu;
  gpu: Gpu;
  ram: Ram;
  motherboard: Motherboard;
  powerSupply: PowerSupply;
  createdAt: Date;
  updatedAt: Date;
};
