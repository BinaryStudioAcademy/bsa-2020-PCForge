import { FastifyInstance } from 'fastify';
import { triggerServerError } from '../../helpers/global.helper';
import { TopGameCreationAttributes } from '../../data/models/topgame';

export type ITopGamesMiddleware = (input: TopGameCreationAttributes) => void;

export const TopGameMiddleware = (fastify: FastifyInstance): ITopGamesMiddleware => {
  const { GameService } = fastify.services;

  return async (input: TopGameCreationAttributes) => {
    const { gameId } = input;

    if (gameId) {
      const game = GameService.getGameById(String(gameId));
      if (!game) {
        triggerServerError(`Game with id ${gameId} does not exists`, 400);
      }
    }
  };
};
