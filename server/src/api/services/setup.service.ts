import { SetupCreationAttributes, SetupModel } from '../../data/models/setup';
import { SetupRepository } from '../../data/repositories/setup.repository';
import { IWithMeta } from '../../data/repositories/base.repository';
import { IFilter } from '../../data/repositories/filters/base.filter';
import { triggerServerError } from '../../helpers/global.helper';
import { ISetupMiddleware } from '../middlewares/setup.middleware';

export class SetupService {
  constructor(private repository: SetupRepository) {}

  async getSetupById(id: string): Promise<SetupModel> {
    const setup = await this.repository.getOneSetup(id);
    if (!setup) {
      triggerServerError(`Setup with id: ${id} does not exists`, 404);
    }
    return setup;
  }

  async getAllSetups(): Promise<IWithMeta<SetupModel>> {
    const setups = await this.repository.getAllSetups(new IFilter());
    return setups;
  }

  async createSetup(inputSetup: SetupCreationAttributes, setupMiddleware: ISetupMiddleware): Promise<SetupModel> {
    await setupMiddleware(inputSetup);
    const setup = await this.repository.createSetup(inputSetup);
    return setup;
  }

  async updateSetupById(
    inputSetup: { id: string; data: SetupCreationAttributes },
    setupMiddleware: ISetupMiddleware
  ): Promise<SetupModel> {
    const { id, data } = inputSetup;
    await setupMiddleware(data);
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
