import { RamCreationAttributes, RamModel, RamStatic } from '../models/ram';
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
        },
      ],
    });
    return ram;
  }

  async getAllRams(filter: IRamFilter): Promise<IWithMeta<RamModel>> {
    const { typeId } = { ...RamFilterDefaults, ...filter };
    const rams = await this.getAll(filter, {
      group: ['ram.id', 'ramType.id'],
      where: { typeId },
      include: [
        {
          model: this.ramTypeModel,
        },
      ],
    });
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
