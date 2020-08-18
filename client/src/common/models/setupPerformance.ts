type IResolution = [number, number];

interface IFpsAnalysis {
  low: number;
  medium: number;
  high: number;
  ultra: number;
}

export interface IReport {
  minimal: {
    cpu: number;
    gpu: number;
    ram: number;
  };
  recommended: {
    cpu: number;
    gpu: number;
    ram: number;
  };
}

export interface SetupPerformance {
  report: IReport;
  fpsAnalysis: [IResolution, IFpsAnalysis][];
}
