import { TypeCpu } from './typeCpu';
import { TypeGpu } from './typeGpu';

export interface Game {
  id: number;
  name: string;
  year: number;
  image: string;
  description: string;
  recommendedRamSize: number;
  minimalRamSize: number;
  createdAt: string;
  updatedAt: string;
  minimalCpuId: number;
  recommendedCpuId: number;
  minimalGpuId: number;
  recommendedGpuId: number;
  recommendedCpu: TypeCpu;
  minimalCpu: TypeCpu;
  recommendedGpu: TypeGpu;
  minimalGpu: TypeGpu;
}
