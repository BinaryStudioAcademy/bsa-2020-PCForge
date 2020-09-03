import { Cpu } from './cpu';
import { Gpu } from './gpu';
import { Ram } from './ram';
import { Motherboard } from './motherboard';
import { PowerSupply } from './powerSupply';

export interface Setup {
  id: number;
  title: string;
  rating: number;
  ratingCount:number;
  description: string;
  comments_count: string;
  image: string;
  cpu: Cpu;
  gpu: Gpu;
  ram: Ram;
  motherBoard: Motherboard;
  powerSupply: PowerSupply;
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

export interface SetupItem {
  title: string;
  description: string;
  image?: string;
  token: string;
  cpuId: number;
  gpuId: number;
  motherboardId: number;
  ramId: number;
  powerSupplyId: number;
}
