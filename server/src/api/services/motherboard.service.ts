import { IWithMeta } from '../../data/repositories/base.repository';
import { MotherboardCreationAttributes, MotherboardModel } from '../../data/models/motherboard';
import { MotherboardRepository } from '../../data/repositories/motherboard.repository';
import { IMotherboardFilter } from '../../data/repositories/filters/motherboard.filter';
import { triggerServerError } from '../../helpers/global.helper';
import { BaseService } from './base.service';

export class MotherboardService extends BaseService<MotherboardModel, MotherboardRepository> {
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

  async createMotherboard(inputMotherboard: MotherboardCreationAttributes): Promise<MotherboardModel> {
    const motherboard = await super.create(inputMotherboard);
    return motherboard;
  }

  async updateMotherboardById({
    id,
    data,
  }: {
    id: string;
    data: MotherboardCreationAttributes;
  }): Promise<MotherboardModel> {
    const motherboard = await super.updateById(id, data);
    return motherboard;
  }

  async deleteMotherboardById(id: string): Promise<void> {
    await this.repository.deleteMotherboardById(id);
  }
}
