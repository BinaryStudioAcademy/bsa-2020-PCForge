import { Cpu } from './cpu';
import { Gpu } from './gpu';
import { Ram } from './ram';
import { Motherboard } from './motherboard';
import { PowerSupply } from './powerSupply';

export interface Setup {
  id: number;
  title: string;
  rating: number;
  description: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface PCSetup extends Setup {
  cpu: Cpu;
  gpu: Gpu;
  ram: Ram;
  motherboard: Motherboard;
  powerSupply: PowerSupply;
}
