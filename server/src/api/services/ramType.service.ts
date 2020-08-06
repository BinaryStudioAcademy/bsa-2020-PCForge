import { RamTypeDataAttributes, RamTypeModel } from '../../data/models/ramtype';
import { RamTypeRepository } from '../../data/repositories/ramType.repository';

export class RamTypeService {
  constructor(private repository: RamTypeRepository) {}

  async getRamTypeById(id: string): Promise<RamTypeModel> {
    const ramType = await this.repository.getRamTypeById(id);
    return ramType;
  }

  async getAllRamTypes(): Promise<RamTypeModel[]> {
    const ramTypes = await this.repository.getAllRamTypes();
    return ramTypes;
  }

  async createRamType(inputRamType: { name: string }): Promise<RamTypeModel> {
    const { name } = inputRamType;
    const ramType = await this.repository.createRamType({ name });
    return ramType;
  }

  async updateRamById(inputRamType: { id: string; data: RamTypeDataAttributes }): Promise<RamTypeModel> {
    const {
      id,
      data: { name },
    } = inputRamType;
    const oldRamType = await this.repository.getRamTypeById(id);
    if (!oldRamType) {
      throw new Error(`RamType with id: ${id} does not exists`);
    }
    const ramType = await this.repository.updateRamTypeById(id, { name });
    return ramType;
  }

  async deleteRamTypeById(inputRamType: { id: string }): Promise<void> {
    const { id } = inputRamType;
    await this.repository.deleteRamTypeById(id);
  }
}
