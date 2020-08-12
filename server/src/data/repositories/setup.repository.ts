import { SetupAttributes, SetupModel, SetupStatic } from '../models/setup';
import { BaseRepository, RichModel } from './base.repository';

export class SetupRepository extends BaseRepository<SetupModel> {
  constructor(private model: SetupStatic) {
    super(<RichModel>model);
  }

  async createSetup(inputSetup: SetupAttributes): Promise<SetupModel> {
    const setup = await this.model.create(inputSetup);
    return setup;
  }
}
