import { RamTypeModel } from '../../data/models/ramtype';
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
}
