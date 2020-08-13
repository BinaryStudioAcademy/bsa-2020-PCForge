import { RamTypeCreationAttributes, RamTypeModel, RamTypeStatic } from '../models/ramtype';
import { BaseRepository, IWithMeta, RichModel } from './base.repository';
import { IFilter } from './filters/base.filter';

export class RamTypeRepository extends BaseRepository<RamTypeModel, IFilter> {
  constructor(private model: RamTypeStatic) {
    super(<RichModel>model, IFilter);
  }

  async getRamTypeById(id: string): Promise<RamTypeModel> {
    const ramType = await this.getById(id);
    return ramType;
  }

  async getAllRamTypes(inputFilter: IFilter): Promise<IWithMeta<RamTypeModel>> {
    const filter = inputFilter || new IFilter();
    const ramTypes = await this.getAll(
      {
        group: ['ramType.id'],
      },
      filter
    );
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
