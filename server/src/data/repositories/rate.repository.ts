import { RateCreationAttributes, RateModel, RateStatic } from '../models/rate';
import { BaseRepository, IWithMeta, RichModel } from './base.repository';
import { IRateFilter } from './filters/rate.filter';

export class RateRepository extends BaseRepository<RateModel, IRateFilter> {
  constructor(private model: RateStatic) {
    super(<RichModel>model, IRateFilter);
  }

  async getRateById(id: string): Promise<RateModel> {
    return await this.getById(id);
  }

  async getAllRates(inputFilter: IRateFilter): Promise<IWithMeta<RateModel>> {
    const filter = inputFilter || new IRateFilter();
    return await this.getAll(
      {
        group: ['rate.id'],
        where: {
          ratebleType: filter.ratebleType,
          ratebleId: filter.ratebleId,
        },
      },
      filter
    );
  }

  async createRate(inputRate: RateCreationAttributes): Promise<RateModel> {
    return this.model.create(inputRate);
  }

  async updateRateById(id: string, inputRate: RateCreationAttributes): Promise<RateModel> {
    return await this.updateById(id, inputRate);
  }

  async deleteRateById(id: string): Promise<void> {
    await this.deleteById(id);
  }
}
