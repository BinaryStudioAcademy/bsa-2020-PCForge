import { SetupCreationAttributes, SetupModel, SetupStatic } from '../models/setup';
import { BaseRepository, RichModel } from './base.repository';
import { IFilter } from './filters/base.filter';

export class SetupRepository extends BaseRepository<SetupModel> {
  constructor(private model: SetupStatic) {
    super(<RichModel>model, IFilter);
  }

  async createSetup(inputSetup: SetupCreationAttributes): Promise<SetupModel> {
    const setup = await this.model.create(inputSetup);
    return setup;
  }
}
