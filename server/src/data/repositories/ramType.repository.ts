import { RamTypeCreationAttributes, RamTypeModel, RamTypeStatic } from '../models/ramtype';
import { BaseRepository, IWithMeta, RichModel } from './base.repository';
import { IFilter } from './filters/base.filter';
import { mergeFilters } from './filters/helper';

export class RamTypeRepository extends BaseRepository<RamTypeModel, IFilter> {
  constructor(private model: RamTypeStatic) {
    super(<RichModel>model, IFilter);
  }

  async getRamTypeById(id: string): Promise<RamTypeModel> {
    const ramType = await this.getById(id);
    return ramType;
  }

  async getAllRamTypes(inputFilter: IFilter): Promise<IWithMeta<RamTypeModel>> {
    const filter = mergeFilters<IFilter>(new IFilter(), inputFilter);
    const ramTypes = await this.getAll(
      {
        group: ['ramType.id'],
      },
      filter
    );
    return ramTypes;
  }
}
