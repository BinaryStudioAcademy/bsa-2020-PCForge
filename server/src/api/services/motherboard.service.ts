import { MotherboardDataAttributes, MotherboardModel } from '../../data/models/Motherboard';
import { IWithMeta } from '../../data/repositories/base.repository';
import { MotherboardRepository } from '../../data/repositories/Motherboard.repository';
import { IMotherboardFilter } from './servicesFilterInterfaces';

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

  async createMotherboard(inputMotherboard: MotherboardDataAttributes): Promise<MotherboardModel> {
    const motherboard = await this.repository.createMotherboard(inputMotherboard);
    return motherboard;
  }

  async updateMotherboardById(inputMotherboard: {
    id: string;
    data: MotherboardDataAttributes;
  }): Promise<MotherboardModel> {
    const { id, data } = inputMotherboard;
    const oldMotherboard = await this.repository.getMotherboardById(id);
    if (!oldMotherboard) {
      throw new Error(`Motherboard with id: ${id} does not exists`);
    }
    const motherboard = await this.repository.updateMotherboardById(id, data);
    return motherboard;
  }

  async deleteMotherboardById(inputMotherboard: { id: string }): Promise<void> {
    const { id } = inputMotherboard;
    await this.repository.deleteMotherboardById(id);
  }
}
