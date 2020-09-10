import { Op } from 'sequelize';
import { RamCreationAttributes, RamModel, RamStatic } from '../models/ram';
import { RamTypeStatic } from '../models/ramtype';
import { BaseRepository, IWithMeta, RichModel } from './base.repository';
import { IRamFilter } from './filters/ram.filter';
import { mergeFilters } from './filters/helper';

export class RamRepository extends BaseRepository<RamModel, RamCreationAttributes, IRamFilter> {
  constructor(private model: RamStatic, private ramTypeModel: RamTypeStatic) {
    super(<RichModel>model, IRamFilter);
  }

  async getRamById(id: string): Promise<RamModel> {
    const ram = await this.model.findOne({
      group: ['ram.id', 'ramType.id'],
      where: { id },
      include: [
        {
          model: this.ramTypeModel,
        },
      ],
    });
    return ram;
  }

  async getAllRams(inputFilter: IRamFilter): Promise<IWithMeta<RamModel>> {
    const filter = mergeFilters<IRamFilter>(new IRamFilter(), inputFilter);
    const rams = await this.getAll(
      {
        group: ['ram.id', 'ramType.id'],
        where: {
          memorySize: {
            [Op.between]: [filter.memorySize.minValue, filter.memorySize.maxValue],
          },
          id: { [Op.and]: { [Op.or]: filter.id, [Op.not]: filter.excludedId } },
        },
        include: [
          {
            model: this.ramTypeModel,
            where: {
              id: filter.typeId,
            },
          },
        ],
      },
      filter
    );
    return rams;
  }
}
