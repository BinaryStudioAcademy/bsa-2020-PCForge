import { HddCreationAttributes, HddModel } from '../../data/models/hdd';
import { IWithMeta } from '../../data/repositories/base.repository';
import { IHddFilter } from '../../data/repositories/filters/hdd.filter';
import { HddRepository } from '../../data/repositories/hdd.repository';
import { triggerServerError } from '../../helpers/global.helper';

export class HddService {
  constructor(private repository: HddRepository) {}

  async getHddById(id: string): Promise<HddModel> {
    const hdd = await this.repository.getHddById(id);
    if (!hdd) {
      triggerServerError(`Hdd with id: ${id} does not exists`, 404);
    }
    return hdd;
  }

  async getAllHdds(filter: IHddFilter): Promise<IWithMeta<HddModel>> {
    const hdds = await this.repository.getAllHdds(filter);
    return hdds;
  }

  async createHdd(inputHdd: HddCreationAttributes): Promise<HddModel> {
    const hdd = await this.repository.createHdd(inputHdd);
    return hdd;
  }

  async updateHddById(inputHdd: { id: string; data: HddCreationAttributes }): Promise<HddModel> {
    const { id, data } = inputHdd;
    const oldHdd = await this.repository.getHddById(id);
    if (!oldHdd) {
      triggerServerError(`Hdd with id: ${id} does not exists`, 404);
    }
    const hdd = await this.repository.updateHddById(id, data);
    return hdd;
  }

  async deleteHddById(inputHdd: { id: string }): Promise<void> {
    const { id } = inputHdd;
    await this.repository.deleteHddById(id);
  }
}
