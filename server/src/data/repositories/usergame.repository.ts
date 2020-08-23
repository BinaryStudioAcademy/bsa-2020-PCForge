import { UserGameCreationAttributes, UserGameStatic, UserGameModel } from '../models/usergame';
import { BaseRepository, RichModel } from './base.repository';
import { IFilter } from './filters/base.filter';

export class UserGameRepository extends BaseRepository<UserGameModel, IFilter> {
  constructor(private model: UserGameStatic) {
    super(<RichModel>model, IFilter);
  }

  async createUserGame(inputUserGame: UserGameCreationAttributes): Promise<UserGameModel> {
    return this.model.create(inputUserGame);
  }
}
