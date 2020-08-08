import { RamDataAttributes, RamModel, RamStatic } from '../models/ram';
import { RamTypeStatic } from '../models/ramtype';
import { BaseRepository, RichModel } from './base.repository';

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

  async getAllRams(): Promise<RamModel[]> {
    const rams = await this.model.findAll({
      group: ['ram.id', 'ramType.id'],
      include: [
        {
          model: this.ramTypeModel,
          attributes: ['id', 'name'],
        },
      ],
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
