import { RateCreationAttributes, RateModel } from '../../data/models/rate';
import { IWithMeta } from '../../data/repositories/base.repository';
import { IRateFilter } from '../../data/repositories/filters/rate.filter';
import { RateRepository } from '../../data/repositories/rate.repository';
import { IRateMiddleware } from '../middlewares/rate.middleware';

export class RateService {
  constructor(private repository: RateRepository) {}

  async getRateById(id: string): Promise<RateModel> {
    return await this.repository.getRateById(id);
  }

  async getAllRates(filter: IRateFilter): Promise<IWithMeta<RateModel>> {
    return await this.repository.getAllRates(filter);
  }

  async createRate(inputRate: RateCreationAttributes, rateMiddleware: IRateMiddleware): Promise<RateModel> {
    await rateMiddleware(inputRate);
    return await this.repository.createRate(inputRate);
  }

  // async getRatesAverage(input: IRateFilter): Promise<{average: string}> {
  //   // const rates: RateModel[] = this.repository.getAllRates(input);
  //   // rates.
  // }

  async updateRateById(
    inputRate: { id: string; data: RateCreationAttributes },
    rateMiddleware: IRateMiddleware
  ): Promise<RateModel> {
    const { id, data } = inputRate;
    await rateMiddleware(data);
    const oldRate = await this.repository.getRateById(id);
    if (!oldRate) {
      throw new Error(`Rate with id: ${id} does not exists`);
    }
    return await this.repository.updateRateById(id, data);
  }

  async deleteRateById(id: string): Promise<void> {
    await this.repository.deleteRateById(id);
  }
}
