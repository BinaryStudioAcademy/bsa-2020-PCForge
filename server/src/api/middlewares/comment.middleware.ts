import { FastifyInstance } from 'fastify';
import { CommentCreationAttributes } from '../../data/models/comment';
import { NewsModel } from '../../data/models/news';
import { GameModel } from '../../data/models/game';
import { SetupModel } from '../../data/models/setup';

export type ICommentMiddleware = (inputComment: CommentCreationAttributes) => void;
export type IInstance = NewsModel | GameModel | SetupModel;

export const CommentMiddleware = (fastify: FastifyInstance): ICommentMiddleware => {
  const { UserService, NewsService, GameService, SetupService } = fastify.services;

  return async (inputComment: CommentCreationAttributes) => {
    const { commentableType, commentableId, userId } = inputComment;
    const stringUserId = userId.toString();
    const stringCommentableId = commentableId.toString();
    let instance: IInstance;

    const user = await UserService.getUser(stringUserId);
    if (!user) {
      throw Error(`There's no user with id: ${userId}`);
    }
    switch (commentableType) {
      case 'news':
        instance = await NewsService.getNewsById(stringCommentableId);
        break;
      case 'game':
        instance = await GameService.getGameById(stringCommentableId);
        break;
      case 'setup':
        instance = await SetupService.getSetupById(stringCommentableId);
        break;
    }
    if (!instance) {
      throw Error(`There's no instance from table: ${commentableType} and with id: ${commentableId}`);
    }
  };
};
