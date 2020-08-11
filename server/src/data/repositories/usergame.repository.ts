import { UserGameStatic, UserGameModel } from '../models/usergame';
import { BaseRepository, RichModel } from './base.repository';

export class UserGameRepository extends BaseRepository<UserGameModel> {
  constructor(private model: UserGameStatic) {
    super(<RichModel>model);
  }

  async favoriteGame(userId: number, gameId: number): Promise<void> {
    const userGameCount = await this.model.count({
      where: {
        userId,
        gameId,
      },
    });

    if (userGameCount) {
      this.model.destroy({
        where: {
          userId,
          gameId,
        },
      });
    } else {
      this.model.create({ userId, gameId });
    }
  }
}
