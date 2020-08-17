import { GpuCreationAttributes, GpuModel } from '../../data/models/gpu';
import { IWithMeta } from '../../data/repositories/base.repository';
import { IFilter } from '../../data/repositories/filters/base.filter';
import { GpuRepository } from '../../data/repositories/gpu.repository';

export class GpuService {
  constructor(private repository: GpuRepository) {}

  async getGpuById(id: string): Promise<GpuModel> {
    const gpu = await this.repository.getGpuById(id);
    return gpu;
  }

  async getAllGpus(filter: IFilter): Promise<IWithMeta<GpuModel>> {
    const gpus = await this.repository.getAllGpus(filter);
    return gpus;
  }

  async createGpu(inputGpu: GpuCreationAttributes): Promise<GpuModel> {
    const gpu = await this.repository.createGpu(inputGpu);
    return gpu;
  }

  async updateGpuById(inputGpu: { id: string; data: GpuCreationAttributes }): Promise<GpuModel> {
    const { id, data } = inputGpu;
    const oldGpu = await this.repository.getGpuById(id);
    if (!oldGpu) {
      throw new Error(`Gpu with id: ${id} does not exists`);
    }
    const Gpu = await this.repository.updateGpuById(id, data);
    return Gpu;
  }

  async deleteGpuById(inputGpu: { id: string }): Promise<void> {
    const { id } = inputGpu;
    await this.repository.deleteGpuById(id);
  }
}
