import { SetupCreationAttributes, SetupModel } from '../../data/models/setup';
import { SetupRepository } from '../../data/repositories/setup.repository';
import { IWithMeta } from '../../data/repositories/base.repository';
import { triggerServerError } from '../../helpers/global.helper';
import { ISetupFilter } from '../../data/repositories/filters/setup.filter';
import { ISetupMiddleware } from '../middlewares/setup.middleware';
import { UserAttributes } from '../../data/models/user';
import { BaseService } from './base.service';

export class SetupService extends BaseService<SetupModel, SetupCreationAttributes, SetupRepository> {
  constructor(private repository: SetupRepository) {
    super(repository);
  }

  async getSetupById(id: string): Promise<SetupModel> {
    const setup = await this.repository.getOneSetup(id);
    if (!setup) {
      triggerServerError(`Setup with id: ${id} does not exists`, 404);
    }
    return setup;
  }

  async getAllSetups(filter: ISetupFilter): Promise<IWithMeta<SetupModel>> {
    const setups = await this.repository.getSetups(filter);
    return setups;
  }

  async createSetup(inputSetup: SetupCreationAttributes, setupMiddleware: ISetupMiddleware): Promise<SetupModel> {
    await setupMiddleware(inputSetup);
    const setup = await super.create(inputSetup);
    return setup;
  }

  async updateSetupById(
    inputSetup: { id: string; data: SetupCreationAttributes },
    setupMiddleware: ISetupMiddleware,
    initiator?: UserAttributes
  ): Promise<SetupModel> {
    const { id, data } = inputSetup;
    const oldSetup = await this.repository.getById(id);
    if (!oldSetup) {
      triggerServerError(`Setup with id: ${id} does not exists`, 404);
    }
    if (!initiator.isAdmin && initiator.id !== oldSetup.authorId) {
      triggerServerError(`Access denied`, 403);
    }
    await setupMiddleware(data);
    const setup = await this.repository.updateById(id, data);
    return setup;
  }

  async deleteSetupById(id: string, initiator?: UserAttributes): Promise<SetupModel> {
    const setup = await this.repository.getOneSetup(id);
    if (!setup) {
      triggerServerError(`Setup with id: ${id} does not exists`, 404);
    }
    if (!initiator?.isAdmin && initiator?.id !== setup.authorId) {
      triggerServerError(`Access denied`, 403);
    }
    await this.repository.deleteById(id);
    return setup;
  }
}
