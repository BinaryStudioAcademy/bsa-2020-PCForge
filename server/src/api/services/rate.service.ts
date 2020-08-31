import { RateCreationAttributes, RateModel, RateAttributes } from '../../data/models/rate';
import { IWithMeta } from '../../data/repositories/base.repository';
import { IRateFilter } from '../../data/repositories/filters/rate.filter';
import { RateRepository } from '../../data/repositories/rate.repository';
import { IRateMiddleware } from '../middlewares/rate.middleware';
import { triggerServerError } from '../../helpers/global.helper';
import { UserAttributes } from '../../data/models/user';
import { BaseService } from './base.service';

export class RateService extends BaseService<RateModel, RateCreationAttributes, RateRepository> {
  constructor(private repository: RateRepository) {
    super(repository);
  }

  async getRateById(id: string): Promise<RateModel> {
    const rate = await this.repository.getRateById(id);
    if (!rate) {
      triggerServerError(`Rate with id: ${id} does not exists`, 404);
    }
    return rate;
  }

  async getAllRates(filter: IRateFilter): Promise<IWithMeta<RateModel>> {
    return await this.repository.getAllRates(filter);
  }

  async createRate(inputRate: RateCreationAttributes, rateMiddleware: IRateMiddleware): Promise<RateModel> {
    await rateMiddleware(inputRate);

    const oldUserRate = await this.repository.getRateByUserAndRateble(
      inputRate.userId,
      inputRate.ratebleId,
      inputRate.ratebleType
    );
    if (oldUserRate) {
      const objOldUserRate: RateAttributes = oldUserRate.toJSON() as RateAttributes;
      return await this.repository.updateById(objOldUserRate.id.toString(), inputRate);
    }

    return await this.repository.create(inputRate);
  }

  async getRatesAverage(input: IRateFilter): Promise<{ average: number }> {
    const average: number = await this.repository.getAverageRate(input);
    return { average };
  }

  async updateRateById(
    { id, data }: { id: string; data: RateCreationAttributes },
    rateMiddleware: IRateMiddleware,
    initiator: UserAttributes
  ): Promise<RateModel> {
    await rateMiddleware(data);
    if (!Object.keys(data).length) {
      triggerServerError('You should specify at least one valid field to update', 400);
    }
    const oldRate = await this.repository.getRateById(id);
    if (!oldRate) {
      triggerServerError(`Rate with id: ${id} does not exists`, 404);
    }
    if (oldRate.userId !== initiator.id) {
      triggerServerError('Access denied', 403);
    }
    return await this.repository.updateById(id, data);
  }

  async deleteRateById(id: string, initiator: UserAttributes): Promise<RateModel> {
    const rate = await this.repository.getRateById(id);
    if (!rate) {
      triggerServerError(`Rate with id: ${id} does not exists`, 404);
    }
    if (rate.userId !== initiator.id) {
      triggerServerError('Access denied', 403);
    }
    await this.repository.deleteById(id);
    return rate;
  }
}
