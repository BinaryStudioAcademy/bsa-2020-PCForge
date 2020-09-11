import { Cpu } from './cpu';
import { Gpu } from './gpu';
import { Ram } from './ram';
import { Motherboard } from './motherboard';
import { PowerSupply } from './powerSupply';
import { TypeHdd } from './hdd';
import { Ssd } from './ssd';

export interface Setup {
  id: number;
  title: string;
  rating: number;
  ownRating: number;
  ratingCount: number;
  comments_count: string;
  description: string;
  image: string;
  cpu: Cpu;
  gpu: Gpu;
  ram: Ram;
  hdd?: TypeHdd;
  ssd?: Ssd;
  motherBoard: Motherboard;
  powerSupply: PowerSupply;
  createdAt: Date;
  updatedAt: Date;
  ramCount: number;
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
