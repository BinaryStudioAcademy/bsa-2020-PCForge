import { SetupAttributes } from '../../data/models/setup';
import { GameRepository } from '../../data/repositories/game.repository';
import { SetupRepository } from '../../data/repositories/setup.repository';

class Resolution {
  constructor(public width: number, public height: number) {}
  getAbsoluteResolution(): number {
    return this.height * this.width;
  }
}

type IResolution = [number, number];

interface IFpsAnalysis {
  low: number;
  medium: number;
  high: number;
  ultra: number;
}

export interface ISetupPerformance {
  setup: SetupAttributes;
  overallCpu: number;
  overallGpu: number;
  overallRam: number;
  fpsAnalysis: [IResolution, IFpsAnalysis][];
}

export class PerformanceService {
  constructor(private setupRepository: SetupRepository, private gameRepository: GameRepository) {}
  private MINIMAL_PERFORMANCE = 1;
  private MAXIMUM_PERFORMANCE = 10;
  private resolutions: Resolution[] = [
    new Resolution(1280, 720),
    new Resolution(1366, 768),
    new Resolution(1600, 900),
    new Resolution(1920, 1080),
    new Resolution(2560, 1440),
    new Resolution(3840, 2160),
  ];
  private DEFAULT_RESOLUTION: Resolution = new Resolution(1920, 1080);
  private DEFAULT_FPS = 60;

  private getOverallPerformance(minimal: number, recommended: number, currentPerformance: number): number {
    if (currentPerformance <= minimal) return this.MINIMAL_PERFORMANCE;
    if (currentPerformance >= recommended) return this.MAXIMUM_PERFORMANCE;
    const performancePerRate = (recommended - minimal) / (this.MAXIMUM_PERFORMANCE - this.MINIMAL_PERFORMANCE);
    const difference = currentPerformance - minimal;
    return difference / performancePerRate;
  }

  /**
   * pts - performance measure
   * Example: minimal - 100pts, current - 1000fps, resolution === DEFAULT_RESOLUTION, DEFAULT_FPS = 60
   * Result: low: 1000 / 10 / 1 * 60 === 600 FPS
   */
  private getFpsAnalysis(
    minimal: number,
    recommended: number,
    currentPerformance: number,
    resolution: Resolution
  ): IFpsAnalysis {
    const ratio = this.DEFAULT_RESOLUTION.getAbsoluteResolution() / resolution.getAbsoluteResolution();
    const low = (currentPerformance / minimal / ratio) * this.DEFAULT_FPS;
    const high = (currentPerformance / recommended / ratio) * this.DEFAULT_FPS;
    const medium = (low + high) / 2;
    const ultra = 2 * high - medium; // because high = (medium + ultra) / 2 (like we calculate medium);
    const analysis: IFpsAnalysis = {
      low,
      medium,
      high,
      ultra,
    };
    return analysis;
  }

  async getSetupPerformanceById(
    id: string,
    gameId: string,
    resolutions: IResolution[] = (this.resolutions as unknown) as IResolution[]
  ): Promise<ISetupPerformance> {
    const setup = await this.setupRepository.getSetupById(id);
    const { cpu, gpu, ram } = setup;
    const {
      minimalCpu,
      recommendedCpu,
      minimalGpu,
      recommendedGpu,
      minimalRamSize,
      recommendedRamSize,
    } = await this.gameRepository.getGameById(gameId);
    const fpsAnalysis: [IResolution, IFpsAnalysis][] = resolutions.map((resolution) => [
      resolution,
      this.getFpsAnalysis(
        (minimalCpu.performance + minimalGpu.performance) / 2,
        (recommendedCpu.performance + recommendedGpu.performance) / 2,
        (cpu.performance + gpu.performance) / 2,
        new Resolution(...resolution)
      ),
    ]);
    const performance: ISetupPerformance = {
      setup,
      overallCpu: this.getOverallPerformance(minimalCpu.performance, recommendedCpu.performance, cpu.performance),
      overallGpu: this.getOverallPerformance(minimalGpu.performance, recommendedGpu.performance, gpu.performance),
      overallRam: this.getOverallPerformance(minimalRamSize, recommendedRamSize, ram.memorySize),
      fpsAnalysis,
    };
    console.log(performance);
    return performance;
  }
}
