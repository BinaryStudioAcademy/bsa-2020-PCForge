import { RamTypeCreationAttributes, RamTypeModel } from '../../data/models/ramtype';
import { IWithMeta } from '../../data/repositories/base.repository';
import { IFilter } from '../../data/repositories/filters/base.filter';
import { RamTypeRepository } from '../../data/repositories/ramType.repository';

export class RamTypeService {
  constructor(private repository: RamTypeRepository) {}

  async getRamTypeById(id: string): Promise<RamTypeModel> {
    const ramType = await this.repository.getRamTypeById(id);
    return ramType;
  }

  async getAllRamTypes(filter: IFilter): Promise<IWithMeta<RamTypeModel>> {
    const ramTypes = await this.repository.getAllRamTypes(filter);
    return ramTypes;
  }

  async createRamType(inputRamType: RamTypeCreationAttributes): Promise<RamTypeModel> {
    const ramType = await this.repository.createRamType(inputRamType);
    return ramType;
  }

  async updateRamById(inputRamType: { id: string; data: RamTypeCreationAttributes }): Promise<RamTypeModel> {
    const { id, data } = inputRamType;
    const oldRamType = await this.repository.getRamTypeById(id);
    if (!oldRamType) {
      throw new Error(`RamType with id: ${id} does not exists`);
    }
    const ramType = await this.repository.updateRamTypeById(id, data);
    return ramType;
  }

  async deleteRamTypeById(id: string): Promise<void> {
    await this.repository.deleteRamTypeById(id);
  }
}
