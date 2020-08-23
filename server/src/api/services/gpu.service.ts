import { GpuCreationAttributes, GpuModel } from '../../data/models/gpu';
import { IWithMeta } from '../../data/repositories/base.repository';
import { GpuRepository } from '../../data/repositories/gpu.repository';
import { IGpuFilter } from '../../data/repositories/filters/gpu.filter';
import { triggerServerError } from '../../helpers/global.helper';
import { BaseService } from './base.service';

export class GpuService extends BaseService<GpuModel, GpuCreationAttributes, GpuRepository> {
  constructor(private repository: GpuRepository) {
    super(repository);
  }

  async getGpuById(id: string): Promise<GpuModel> {
    const gpu = await this.repository.getGpuById(id);
    if (!gpu) {
      triggerServerError(`Gpu with id: ${id} does not exists`, 404);
    }
    return gpu;
  }

  async getAllGpus(filter: IGpuFilter): Promise<IWithMeta<GpuModel>> {
    const gpus = await this.repository.getAllGpus(filter);
    return gpus;
  }

  async createGpu(inputGpu: GpuCreationAttributes): Promise<GpuModel> {
    const gpu = await super.create(inputGpu);
    return gpu;
  }

  async updateGpuById({ id, data }: { id: string; data: GpuCreationAttributes }): Promise<GpuModel> {
    const gpu = await super.updateById(id, data);
    return gpu;
  }

  async deleteGpuById(id: string): Promise<void> {
    await super.deleteById(id);
  }
}
