import { Cpu } from './cpu';
import { Gpu } from './gpu';
import { Ram } from './ram';
import { Motherboard } from './motherboard';
import { PowerSupply } from './powerSupply';
import { Comment } from './comment';

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
  motherBoard: Motherboard;
  powerSupply: PowerSupply;
  comments: Comment[];
}
