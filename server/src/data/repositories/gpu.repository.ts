import { GpuCreationAttributes, GpuModel, GpuStatic } from '../models/gpu';
import { BaseRepository, IWithMeta, RichModel } from './base.repository';
import { IFilter } from './filters/base.filter';
import { IGpuFilter } from './filters/gpu.filter';
import { mergeFilters } from './filters/helper';
import { Op } from 'sequelize';

export class GpuRepository extends BaseRepository<GpuModel, GpuCreationAttributes, IFilter> {
  constructor(private model: GpuStatic) {
    super(<RichModel>model, IFilter);
  }

  async getGpuById(id: string): Promise<GpuModel> {
    const gpu = await this.getById(id);
    return gpu;
  }

  async getAllGpus(inputFilter: IGpuFilter): Promise<IWithMeta<GpuModel>> {
    const filter = mergeFilters(new IGpuFilter(), inputFilter);
    const gpus = await this.getAll(
      {
        group: ['gpu.id'],
        where: {
          memorySize: {
            [Op.between]: [filter.memorySize.minValue, filter.memorySize.maxValue],
          },
          id: { [Op.and]: { [Op.or]: filter.id, [Op.not]: filter.excludedId } },
        },
      },
      filter
    );
    return gpus;
  }
}
