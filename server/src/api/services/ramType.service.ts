import { RamTypeCreationAttributes, RamTypeModel } from '../../data/models/ramtype';
import { IWithMeta } from '../../data/repositories/base.repository';
import { RamTypeRepository } from '../../data/repositories/ramType.repository';
import { IFilter } from '../../data/repositories/filters/base.filter';
import { triggerServerError } from '../../helpers/global.helper';
import { BaseService } from './base.service';

export class RamTypeService extends BaseService<RamTypeModel, RamTypeCreationAttributes, RamTypeRepository> {
  constructor(private repository: RamTypeRepository) {
    super(repository);
  }

  async getRamTypeById(id: string): Promise<RamTypeModel> {
    const ramType = await this.repository.getRamTypeById(id);
    if (!ramType) {
      triggerServerError(`Ram type with id: ${id} does not exists`, 404);
    }
    return ramType;
  }

  async getAllRamTypes(filter: IFilter): Promise<IWithMeta<RamTypeModel>> {
    const ramTypes = await this.repository.getAllRamTypes(filter);
    return ramTypes;
  }

  async createRamType(inputRamType: RamTypeCreationAttributes): Promise<RamTypeModel> {
    const ramType = await super.create(inputRamType);
    return ramType;
  }

  async updateRamById({ id, data }: { id: string; data: RamTypeCreationAttributes }): Promise<RamTypeModel> {
    const ramType = await super.updateById(id, data);
    return ramType;
  }

  async deleteRamTypeById(id: string): Promise<RamTypeModel> {
    return await super.deleteById(id);
  }
}
