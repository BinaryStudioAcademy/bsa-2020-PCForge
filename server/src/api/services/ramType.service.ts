import { RamTypeCreationAttributes, RamTypeModel } from '../../data/models/ramtype';
import { IWithMeta } from '../../data/repositories/base.repository';
import { RamTypeRepository } from '../../data/repositories/ramType.repository';
import { IFilter } from '../../data/repositories/filters/base.filter';
import { triggerServerError } from '../../helpers/global.helper';

export class RamTypeService {
  constructor(private repository: RamTypeRepository) {}

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
    const ramType = await this.repository.createRamType(inputRamType);
    return ramType;
  }

  async updateRamById(inputRamType: { id: string; data: RamTypeCreationAttributes }): Promise<RamTypeModel> {
    const { id, data } = inputRamType;
    const oldRamType = await this.repository.getRamTypeById(id);
    if (!oldRamType) {
      triggerServerError(`Ram type with id: ${id} does not exists`, 404);
    }
    const ramType = await this.repository.updateRamTypeById(id, data);
    return ramType;
  }

  async deleteRamTypeById(id: string): Promise<RamTypeModel> {
    const ramType = await this.repository.getRamTypeById(id);
    if (!ramType) {
      triggerServerError(`Ram type with id: ${id} does not exists`, 404);
    }
    await this.repository.deleteRamTypeById(id);
    return ramType;
  }
}
