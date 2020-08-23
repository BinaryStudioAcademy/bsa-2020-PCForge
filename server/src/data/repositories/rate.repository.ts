import { RateModel, RateStatic } from '../models/rate';
import { BaseRepository, IWithMeta, RichModel } from './base.repository';
import { mergeFilters } from './filters/helper';
import { IRateFilter } from './filters/rate.filter';

export class RateRepository extends BaseRepository<RateModel, IRateFilter> {
  constructor(private model: RateStatic) {
    super(<RichModel>model, IRateFilter);
  }

  async getRateById(id: string): Promise<RateModel> {
    return await this.getById(id);
  }

  async getAllRates(inputFilter: IRateFilter): Promise<IWithMeta<RateModel>> {
    const filter = mergeFilters<IRateFilter>(new IRateFilter(), inputFilter);
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

  async getAverageRate(inputFilter: IRateFilter): Promise<number> {
    const filter = mergeFilters<IRateFilter>(new IRateFilter(), inputFilter);
    const averageRate: number = await this.model.aggregate('value', 'AVG', {
      where: {
        ratebleType: filter.ratebleType,
        ratebleId: filter.ratebleId,
      },
    });
    return averageRate;
  }
}
