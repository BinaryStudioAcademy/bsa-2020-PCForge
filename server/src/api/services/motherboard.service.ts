import { IWithMeta } from '../../data/repositories/base.repository';
import { MotherboardCreationAttributes, MotherboardModel } from '../../data/models/motherboard';
import { MotherboardRepository } from '../../data/repositories/motherboard.repository';
import { IMotherboardFilter } from '../../data/repositories/filters/motherboard.filter';
import { triggerServerError } from '../../helpers/global.helper';
import { BaseService } from './base.service';
import { IMotherboardMiddleware } from '../middlewares/motherboard.middleware';

export class MotherboardService extends BaseService<
  MotherboardModel,
  MotherboardCreationAttributes,
  MotherboardRepository
> {
  constructor(private repository: MotherboardRepository) {
    super(repository);
  }

  async getMotherboardById(id: string): Promise<MotherboardModel> {
    const motherboard = await this.repository.getMotherboardById(id);
    if (!motherboard) {
      triggerServerError(`Motherboard with id: ${id} does not exists`, 404);
    }
    return motherboard;
  }

  async getAllMotherboards(filter: IMotherboardFilter): Promise<IWithMeta<MotherboardModel>> {
    const motherboards = await this.repository.getAllMotherboards(filter);
    return motherboards;
  }

  async createMotherboard(
    inputMotherboard: MotherboardCreationAttributes,
    motherboardMiddleware: IMotherboardMiddleware
  ): Promise<MotherboardModel> {
    await motherboardMiddleware(inputMotherboard);
    const motherboard = await super.create(inputMotherboard);
    return motherboard;
  }

  async updateMotherboardById(
    inputMotherboard: { id: string; data: MotherboardCreationAttributes },
    motherboardMiddleware: IMotherboardMiddleware
  ): Promise<MotherboardModel> {
    const { id, data } = inputMotherboard;
    if (!Object.keys(data).length) {
      triggerServerError('No valid fields to update specified', 400);
    }
    await motherboardMiddleware(data);
    const motherboard = await super.updateById(id, data);
    return motherboard;
  }

  async deleteMotherboardById(id: string): Promise<MotherboardModel> {
    return await super.deleteById(id);
  }
}
