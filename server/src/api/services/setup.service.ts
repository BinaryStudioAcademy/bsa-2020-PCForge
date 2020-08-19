import { SetupCreationAttributes, SetupModel } from '../../data/models/setup';
import { SetupRepository } from '../../data/repositories/setup.repository';
import { IWithMeta } from '../../data/repositories/base.repository';
import { triggerServerError } from '../../helpers/global.helper';

export class SetupService {
  constructor(private repository: SetupRepository) {}

  async getSetupById(id: string): Promise<SetupModel> {
    const setup = await this.repository.getById(id);
    if (!setup) {
      triggerServerError(`Setup with id: ${id} does not exists`, 404);
    }
    return setup;
  }

  async getAllSetups(): Promise<IWithMeta<SetupModel>> {
    const setups = await this.repository.getSetups();
    return setups;
  }

  async createSetup(inputSetup: SetupCreationAttributes): Promise<SetupModel> {
    const setup = await this.repository.createSetup(inputSetup);
    return setup;
  }

  async updateSetupById(id: string, data: SetupCreationAttributes): Promise<SetupModel> {
    const oldSetup = await this.repository.getById(id);
    if (!oldSetup) {
      triggerServerError(`Setup with id: ${id} does not exists`, 404);
    }
    const setup = await this.repository.updateById(id, data);
    return setup;
  }

  async deleteSetupById(id: string): Promise<void> {
    await this.repository.deleteById(id);
  }
}
