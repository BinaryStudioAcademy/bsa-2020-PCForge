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

  async getSetupById(id: string, requestingUserId?: number): Promise<SetupModel> {
    const setup = await this.repository.getOneSetup(id, requestingUserId);
    if (!setup) {
      triggerServerError(`Setup with id: ${id} does not exists`, 404);
    }
    return setup;
  }

  async getAllSetups(filter: ISetupFilter, requestingUserId: number): Promise<IWithMeta<SetupModel>> {
    const setups = await this.repository.getSetups(filter, requestingUserId);
    return setups;
  }

  async createSetup(inputSetup: SetupCreationAttributes, setupMiddleware: ISetupMiddleware): Promise<SetupModel> {
    await setupMiddleware(inputSetup);
    const setup = await this.repository.create(inputSetup);
    return setup;
  }

  async updateSetupById(
    inputSetup: { id: string; data: SetupCreationAttributes },
    setupMiddleware: ISetupMiddleware,
    initiator?: UserAttributes
  ): Promise<SetupModel> {
    const { id, data } = inputSetup;
    if (!Object.keys(data).length) {
      triggerServerError('You should specify at least one valid field to update', 400);
    }
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
    const setup = await this.repository.getOneSetup(id, initiator.id);
    if (!setup) {
      triggerServerError(`Setup with id: ${id} does not exists`, 404);
    }
    if (!initiator?.isAdmin && initiator?.id !== setup.authorId) {
      triggerServerError(`Access denied`, 403);
    }
    await this.repository.deleteById(id);
    return setup;
  }

  async forkSetupById(id: string, userId: number): Promise<SetupModel> {
    return await this.repository.forkSetup(id, userId);
  }
}
