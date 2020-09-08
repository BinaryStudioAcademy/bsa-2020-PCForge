import { Cpu } from './cpu';
import { Gpu } from './gpu';

export interface Game {
  id: number;
  name: string;
  year: number;
  image: string;
  description: string;
  recommendedRamSize: number;
  minimalRamSize: number;
  createdAt: Date;
  updatedAt: Date;
  recommendedCpu: Cpu;
  minimalCpu: Cpu;
  recommendedGpu: Gpu;
  minimalGpu: Gpu;
}

export interface GameCreationAttributes {
  name: string;
  year: number;
  image?: string;
  description: string;
  recommendedRamSize: number;
  minimalRamSize: number;
  recommendedCpuId: number;
  minimalCpuId: number;
  recommendedGpuId: number;
  minimalGpuId: number;
}
