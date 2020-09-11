type IResolution = [number, number];

export interface IFpsAnalysis {
  low: number;
  medium: number;
  high: number;
  ultra: number;
}

export interface IHardwareReport {
  cpu: number;
  gpu: number;
  ram: number;
}

export interface IReport {
  minimal: IHardwareReport;
  recommended: IHardwareReport;
}

export interface ISetupPerformance {
  report: IReport;
  fpsAnalysis: [IResolution, IFpsAnalysis][];
  overall: IHardwareReport;
}