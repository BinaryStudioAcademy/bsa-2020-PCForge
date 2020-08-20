import { IGameFilter } from '../../data/repositories/filters/game.filter';
import { GameRepository } from '../../data/repositories/game.repository';
import { SetupRepository } from '../../data/repositories/setup.repository';

class Resolution {
  constructor(public width: number, public height: number) {}
  getAbsoluteResolution(): number {
    return this.height * this.width;
  }
  getIResolution(): IResolution {
    return [this.width, this.height];
  }
}

type IResolution = [number, number];

interface IFpsAnalysis {
  low: number;
  medium: number;
  high: number;
  ultra: number;
}

interface IHardwareReport {
  cpu: number;
  gpu: number;
  ram: number;
}

interface IReport {
  minimal: IHardwareReport;
  recommended: IHardwareReport;
}

export interface ISetupPerformance {
  report: IReport;
  fpsAnalysis: [IResolution, IFpsAnalysis][];
  overall: IHardwareReport;
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

  private async getOverallPerformance(type: 'ram' | 'cpu' | 'gpu', currentValue: number): Promise<number> {
    const { data: games } = await this.gameRepository.getAllGames(({
      from: 0,
      count: 100,
      orderBy: { [type]: { recommended: 'DESC' } },
    } as unknown) as IGameFilter);
    const availableGames = games.filter((game) => {
      switch (type) {
        case 'ram':
          return game.recommendedRamSize >= currentValue;
        case 'cpu':
          return game.recommendedCpu.performance >= currentValue;
        case 'gpu':
          return game.recommendedGpu.performance >= currentValue;
      }
    });
    const result = 10 - (availableGames.length / games.length) * 10;
    return Math.round(result * 10) / 10;
  }

  /**
   * pts - performance measure
   * Example: minimal - 100pts, current - 1000fps, resolution = 4K, DEFAULT_RESOLUTION = 1920, DEFAULT_FPS = 60
   * Result: low: 1000 / 10 / 4 * 60 === 1500 FPS
   */
  private getFpsAnalysis(
    minimal: number,
    recommended: number,
    currentPerformance: number,
    resolution: Resolution
  ): IFpsAnalysis {
    const ratio = resolution.getAbsoluteResolution() / this.DEFAULT_RESOLUTION.getAbsoluteResolution();
    const low = (currentPerformance / minimal / ratio) * this.DEFAULT_FPS;
    const high = (currentPerformance / recommended / ratio) * this.DEFAULT_FPS;
    const medium = (low + high) / 2;
    const ultra = 2 * high - medium; // because high = (medium + ultra) / 2 (like we calculate medium);
    const analysis: IFpsAnalysis = {
      low: Math.ceil(low),
      medium: Math.ceil(medium),
      high: Math.ceil(high),
      ultra: Math.ceil(ultra),
    };
    return analysis;
  }

  private getReport(needed: number, current: number): number {
    return Math.ceil((current / needed) * 100);
  }

  async getSetupPerformanceById(
    id: string,
    gameId: string,
    resolutions: IResolution[] = this.resolutions.map((r) => r.getIResolution())
  ): Promise<ISetupPerformance> {
    const { cpu, gpu, ram } = await this.setupRepository.getOneSetup(id);
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
      fpsAnalysis,
      report: {
        minimal: {
          cpu: this.getReport(minimalCpu.performance, cpu.performance),
          gpu: this.getReport(minimalGpu.performance, gpu.performance),
          ram: this.getReport(minimalRamSize, ram.memorySize),
        },
        recommended: {
          cpu: this.getReport(recommendedCpu.performance, cpu.performance),
          gpu: this.getReport(recommendedGpu.performance, gpu.performance),
          ram: this.getReport(recommendedRamSize, ram.memorySize),
        },
      },
      overall: {
        cpu: await this.getOverallPerformance('cpu', cpu.performance),
        gpu: await this.getOverallPerformance('gpu', gpu.performance),
        ram: await this.getOverallPerformance('ram', ram.memorySize),
      },
    };
    return performance;
  }
}
