import { GameRepository } from '../../data/repositories/game.repository';
import { SetupRepository } from '../../data/repositories/setup.repository';

export interface ISetupPerformance {
  overallCpu: number;
  overallGpu: number;
  overallRam: number;
}

export class PerformanceService {
  constructor(private setupRepository: SetupRepository, private gameRepository: GameRepository) {}
  private MINIMAL_PERFORMANCE = 1;
  private MAXIMUM_PERFORMANCE = 10;

  private getOverallPerformance(minimal: number, recommended: number, currentValue: number): number {
    if (currentValue <= minimal) return this.MINIMAL_PERFORMANCE;
    if (currentValue >= recommended) return this.MAXIMUM_PERFORMANCE;
    const performancePerRate = (recommended - minimal) / (this.MAXIMUM_PERFORMANCE - this.MINIMAL_PERFORMANCE);
    const difference = currentValue - minimal;
    return difference / performancePerRate;
  }

  async getSetupPerformanceById(id: string, gameId: string): Promise<ISetupPerformance> {
    const { cpu, gpu, ram } = await this.setupRepository.getSetupById(id);
    const {
      minimalCpu,
      recommendedCpu,
      minimalGpu,
      recommendedGpu,
      minimalRamSize,
      recommendedRamSize,
    } = await this.gameRepository.getGameById(gameId);
    console.log(minimalCpu.performance, recommendedCpu.performance, cpu.performance, minimalRamSize, ram.memorySize);
    const performance: ISetupPerformance = {
      overallCpu: this.getOverallPerformance(minimalCpu.performance, recommendedCpu.performance, cpu.performance),
      overallGpu: this.getOverallPerformance(minimalGpu.performance, recommendedGpu.performance, gpu.performance),
      overallRam: this.getOverallPerformance(minimalRamSize, recommendedRamSize, ram.memorySize),
    };
    console.log(performance);
    return performance;
  }
}
