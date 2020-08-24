import {
  UserGameCreationAttributes,
  UserGameCreationResult,
  UserGameStatic,
  UserGameModel,
  UserGameDeleteAttributes,
} from '../models/usergame';
import { GameStatic } from '../models/game';
import { BaseRepository, RichModel, IWithMeta } from './base.repository';
import { IFilter } from './filters/base.filter';
import { mergeFilters } from './filters/helper';

export class UserGameRepository extends BaseRepository<UserGameModel, IFilter> {
  constructor(private model: UserGameStatic, private gameModel: GameStatic) {
    super(<RichModel>model, IFilter);
  }

  async getUserGames(userId: string, inputFilter: IFilter): Promise<IWithMeta<UserGameModel>> {
    const filter = mergeFilters<IFilter>(new IFilter(), inputFilter);
    const result = await this.model.findAndCountAll({
      include: [
        {
          model: this.gameModel,
        },
      ],
      where: { userId },
      offset: filter.from,
      limit: filter.count,
    });

    const globalCount = result.count;
    const countAfterFiltering = result.rows.length;

    return {
      meta: { globalCount, countAfterFiltering },
      data: result.rows,
    };
  }

  async findOrCreateUserGame(inputUserGame: UserGameCreationAttributes): Promise<UserGameCreationResult> {
    const [userGame, isNew] = await this.model.findOrCreate({
      where: { userId: inputUserGame.userId, gameId: inputUserGame.gameId },
    });
    return {
      userGame,
      isNew,
    };
  }

  async deleteUserGame(inputUserGame: UserGameDeleteAttributes): Promise<number> {
    return await this.model.destroy({ where: { userId: inputUserGame.userId, gameId: inputUserGame.gameId } });
  }
}
