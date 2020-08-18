import { FastifyInstance } from 'fastify';
import { RateCreationAttributes } from '../../data/models/rate';
import { NewsModel } from '../../data/models/news';
import { GameModel } from '../../data/models/game';
import { SetupModel } from '../../data/models/setup';
import { triggerServerError } from '../../helpers/global.helper';

export type IRateMiddleware = (inputRate: RateCreationAttributes) => void;
export type IInstance = NewsModel | GameModel | SetupModel;

export const RateMiddleware = (fastify: FastifyInstance): IRateMiddleware => {
  const { UserService, NewsService, GameService, SetupService } = fastify.services;

  return async (inputRate: RateCreationAttributes) => {
    const { ratebleType, ratebleId, userId } = inputRate;
    const stringUserId = userId.toString();
    const stringRatebleId = ratebleId.toString();
    let instance: IInstance;

    const user = await UserService.getUser(stringUserId);
    if (!user) {
      throw Error(`There's no user with id: ${userId}`);
    }
    switch (ratebleType) {
      case 'news':
        instance = await NewsService.getNewsById(stringRatebleId);
        break;
      case 'game':
        instance = await GameService.getGameById(stringRatebleId);
        break;
      case 'setup':
        instance = await SetupService.getSetupById(stringRatebleId);
        break;
    }
    if (!instance) {
      triggerServerError(`There's no instance from table: ${ratebleType} and with id: ${ratebleId}`, 404);
    }
  };
};
