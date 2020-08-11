import { UserGameRepository } from '../../data/repositories/usergame.repository';

export class UserGameService {
  constructor(private repository: UserGameRepository) {}

  async favorite(userId: number, gameId: number): Promise<void> {
    await this.repository.favoriteGame(userId, gameId);
  }
}
