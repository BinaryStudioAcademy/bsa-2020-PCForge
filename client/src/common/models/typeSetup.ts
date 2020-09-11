import { Cpu } from './cpu';
import { Gpu } from './gpu';
import { Ram } from './ram';
import { Motherboard } from './motherboard';
import { PowerSupply } from './powerSupply';
import { TypeUser } from './typeUser';

export type SetupType = {
  id: number;
  title: string;
  description: string;
  image: string;
  comments: string;
  rating: number;
  ownRating: number;
  ratingCount: number;
  comments_count: number;
  cpu: Cpu;
  gpu: Gpu;
  ram: Ram;
  motherboard: Motherboard;
  powerSupply: PowerSupply;
  author: TypeUser;
  createdAt: Date;
  updatedAt: Date;
};
