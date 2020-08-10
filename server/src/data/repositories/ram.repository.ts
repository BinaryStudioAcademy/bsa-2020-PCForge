import { RamDataAttributes, RamModel, RamStatic } from '../models/ram';
import { RamTypeStatic } from '../models/ramtype';
import { BaseRepository, IWithMeta, RichModel } from './base.repository';
import { IRamFilter, RamFilterDefaults } from './repositoriesFilterInterfaces';

export class RamRepository extends BaseRepository<RamModel> {
  constructor(private model: RamStatic, private ramTypeModel: RamTypeStatic) {
    super(<RichModel>model);
  }

  async getRamById(id: string): Promise<RamModel> {
    const ram = await this.model.findOne({
      group: ['ram.id', 'ramType.id'],
      where: { id },
      include: [
        {
          model: this.ramTypeModel,
          attributes: ['id', 'name'],
        },
      ],
    });
    return ram;
  }

  async getAllRams(filter: IRamFilter): Promise<IWithMeta<RamModel>> {
    const { typeId, from: offset, count: limit } = { ...RamFilterDefaults, ...filter };
    const rams = await this.getAll({
      group: ['ram.id', 'ramType.id'],
      where: { typeId },
      include: [
        {
          model: this.ramTypeModel,
          attributes: ['id', 'name'],
        },
      ],
      order: [['id', 'ASC']],
      offset: offset,
      limit: limit,
    });
    return rams;
  }

  async createRam(inputRam: RamDataAttributes): Promise<RamModel> {
    const { id } = await this.model.create(inputRam);
    const ram = this.getRamById(id.toString());
    return ram;
  }

  async updateRamById(id: string, inputRam: RamDataAttributes): Promise<RamModel> {
    const ram = await this.updateById(id, inputRam);
    return ram;
  }

  async deleteRamById(id: string): Promise<void> {
    await this.deleteById(id);
  }
}
