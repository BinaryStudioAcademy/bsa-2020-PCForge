import { IWithMeta } from '../../data/repositories/base.repository';
import { MotherboardCreationAttributes, MotherboardModel } from '../../data/models/motherboard';
import { MotherboardRepository } from '../../data/repositories/motherboard.repository';
import { IMotherboardFilter } from '../../data/repositories/filters/motherboard.filter';

export class MotherboardService {
  constructor(private repository: MotherboardRepository) {}

  async getMotherboardById(id: string): Promise<MotherboardModel> {
    const motherboard = await this.repository.getMotherboardById(id);
    return motherboard;
  }

  async getAllMotherboards(filter: IMotherboardFilter): Promise<IWithMeta<MotherboardModel>> {
    const motherboards = await this.repository.getAllMotherboards(filter);
    return motherboards;
  }

  async createMotherboard(inputMotherboard: MotherboardCreationAttributes): Promise<MotherboardModel> {
    const motherboard = await this.repository.createMotherboard(inputMotherboard);
    return motherboard;
  }

  async updateMotherboardById(inputMotherboard: {
    id: string;
    data: MotherboardCreationAttributes;
  }): Promise<MotherboardModel> {
    const { id, data } = inputMotherboard;
    const oldMotherboard = await this.repository.getMotherboardById(id);
    if (!oldMotherboard) {
      throw new Error(`Motherboard with id: ${id} does not exists`);
    }
    const motherboard = await this.repository.updateMotherboardById(id, data);
    return motherboard;
  }

  async deleteMotherboardById(id: string): Promise<void> {
    await this.repository.deleteMotherboardById(id);
  }
}
