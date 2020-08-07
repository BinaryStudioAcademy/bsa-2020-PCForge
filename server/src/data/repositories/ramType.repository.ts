import { RamTypeDataAttributes, RamTypeModel, RamTypeStatic } from '../models/ramtype';
import { BaseRepository, RichModel } from './base.repository';

export class RamTypeRepository extends BaseRepository<RamTypeModel> {
  constructor(private model: RamTypeStatic) {
    super(<RichModel>model);
  }

  async getRamTypeById(id: string): Promise<RamTypeModel> {
    const ramType = await this.getById(id);
    return ramType;
  }

  async getAllRamTypes(): Promise<RamTypeModel[]> {
    const ramTypes = await this.model.findAll();
    return ramTypes;
  }

  async createRamType(inputRamType: RamTypeDataAttributes): Promise<RamTypeModel> {
    const ramType = await this.model.create(inputRamType);
    return ramType;
  }

  async updateRamTypeById(id: string, inputRamType: RamTypeDataAttributes): Promise<RamTypeModel> {
    const ramType = await this.updateById(id, inputRamType);
    return ramType;
  }

  async deleteRamTypeById(id: string): Promise<void> {
    await this.deleteById(id);
  }
}
