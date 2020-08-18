import { Setup } from './setup';

export type IResolution = [number, number];

export interface IFpsAnalysis {
  low: number;
  medium: number;
  high: number;
  ultra: number;
}

export interface SetupPerformance {
  setup: Setup;
  overallCpu: number;
  overallGpu: number;
  overallRam: number;
  fpsAnalysis: [IResolution, IFpsAnalysis][];
}
