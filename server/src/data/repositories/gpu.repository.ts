import { GpuDataAttributes, GpuModel, GpuStatic } from '../models/Gpu';
import { BaseRepository, RichModel } from './base.repository';

export class GpuRepository extends BaseRepository<GpuModel> {
  constructor(private model: GpuStatic) {
    super(<RichModel>model);
  }

  async getGpuById(id: string): Promise<GpuModel> {
    const gpu = await this.getById(id);
    return gpu;
  }

  async getAllGpus(): Promise<GpuModel[]> {
    const gpus = await this.getAll();
    return gpus;
  }

  async createGpu(inputGpu: GpuDataAttributes): Promise<GpuModel> {
    const gpu = await this.model.create(inputGpu);
    return gpu;
  }

  async updateGpuById(id: string, inputGpu: GpuDataAttributes): Promise<GpuModel> {
    const gpu = await this.updateById(id, inputGpu);
    return gpu;
  }

  async deleteGpuById(id: string): Promise<void> {
    await this.deleteById(id);
  }
}
