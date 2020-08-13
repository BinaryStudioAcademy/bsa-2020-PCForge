import { RamCreationAttributes, RamModel, RamStatic } from '../models/ram';
import { RamTypeStatic } from '../models/ramtype';
import { BaseRepository, IWithMeta, RichModel } from './base.repository';
import { IRamFilter } from './filters/ram.filter';

export class RamRepository extends BaseRepository<RamModel, IRamFilter> {
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
    const filter = inputFilter || new IRamFilter();
    const rams = await this.getAll(
      {
        group: ['ram.id', 'ramType.id'],
        include: [
          {
            model: this.ramTypeModel,
            where: {
              id: filter.type.id,
            },
          },
        ],
      },
      filter
    );
    return rams;
  }

  async createRam(inputRam: RamCreationAttributes): Promise<RamModel> {
    const { id } = await this.model.create(inputRam);
    const ram = this.getRamById(id.toString());
    return ram;
  }

  async updateRamById(id: string, inputRam: RamCreationAttributes): Promise<RamModel> {
    const ram = await this.updateById(id, inputRam);
    return ram;
  }

  async deleteRamById(id: string): Promise<void> {
    await this.deleteById(id);
  }
}
