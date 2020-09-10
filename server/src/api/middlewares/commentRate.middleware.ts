import { FastifyInstance } from 'fastify';
import { triggerServerError } from '../../helpers/global.helper';
import { CommentRateCreationAttributes } from '../../data/models/commentRates';

export type ICommentRateMiddleware = (requestRate: CommentRateCreationAttributes) => void;

export const CommentRateMiddleWare = (fastify: FastifyInstance): ICommentRateMiddleware => {
  const { UserService, CommentService } = fastify.services;

  return async (requestRate: CommentRateCreationAttributes) => {
    const { userId, commentId } = requestRate;
    const user = await UserService.getUser(userId.toString());
    if (!user) {
      triggerServerError(`There's no user with id: ${userId}`, 404);
    }
    const comment = await CommentService.getCommentById(commentId.toString());
    if (!comment) {
      triggerServerError(`There's no comment with id: ${commentId}`, 404);
    }
  };
};
