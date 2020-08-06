import { RamTypeModel, RamTypeStatic } from '../models/ramtype';

export class RamTypeRepository {
  constructor(private model: RamTypeStatic) {}

  async getRamTypeById(id: string): Promise<RamTypeModel> {
    const ramType = await this.model.findByPk(id);
    return ramType;
  }

  async getAllRamTypes(): Promise<RamTypeModel[]> {
    const ramTypes = await this.model.findAll();
    return ramTypes;
  }

  async createRamType(inputRamType: { name: string }): Promise<RamTypeModel> {
    const { name } = inputRamType;
    const ramType = await this.model.create({ name });
    return ramType;
  }
}
