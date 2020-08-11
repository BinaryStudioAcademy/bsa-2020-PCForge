import { RamTypeCreationAttributes, RamTypeModel, RamTypeStatic } from '../models/ramtype';
import { BaseRepository, IWithMeta, RichModel } from './base.repository';
import { IFilter } from './repositoriesFilterInterfaces';

export class RamTypeRepository extends BaseRepository<RamTypeModel> {
  constructor(private model: RamTypeStatic) {
    super(<RichModel>model);
  }

  async getRamTypeById(id: string): Promise<RamTypeModel> {
    const ramType = await this.getById(id);
    return ramType;
  }

  async getAllRamTypes(filter: IFilter): Promise<IWithMeta<RamTypeModel>> {
    const ramTypes = await this.getAll(filter, {
      group: ['ramType.id'],
    });
    return ramTypes;
  }

  async createRamType(inputRamType: RamTypeCreationAttributes): Promise<RamTypeModel> {
    const ramType = await this.model.create(inputRamType);
    return ramType;
  }

  async updateRamTypeById(id: string, inputRamType: RamTypeCreationAttributes): Promise<RamTypeModel> {
    const ramType = await this.updateById(id, inputRamType);
    return ramType;
  }

  async deleteRamTypeById(id: string): Promise<void> {
    await this.deleteById(id);
  }
}
