import { CommentCreationAttributes, CommentModel } from '../../data/models/comment';
import { IWithMeta } from '../../data/repositories/base.repository';
import { ICommentFilter } from '../../data/repositories/filters/comment.filter';
import { CommentRepository } from '../../data/repositories/comment.repository';
import { ICommentMiddleware } from '../middlewares/comment.middleware';
import { triggerServerError } from '../../helpers/global.helper';
import { BaseService } from './base.service';
import { UserAttributes } from '../../data/models/user';

export class CommentService extends BaseService<CommentModel, CommentCreationAttributes, CommentRepository> {
  constructor(private repository: CommentRepository) {
    super(repository);
  }

  async getCommentById(id: string): Promise<CommentModel> {
    const comment = await this.repository.getCommentById(id);
    if (!comment) {
      triggerServerError(`Comment with id: ${id} does not exists`, 404);
    }
    return comment;
  }

  async getAllComments(filter: ICommentFilter, initiator: UserAttributes): Promise<IWithMeta<CommentModel>> {
    const comments = await this.repository.getAllComments(filter);
    for (let i = 0; i < comments.data.length; i++) {
      for (let j = 0; j < comments.data[i].commentRates.length; j++) {
        const userID = comments.data[i].commentRates[j].userId;
        if (userID === initiator.id) {
          if (comments.data[i].commentRates[j].isLiked) comments.data[i].setDataValue('isLikedByCurrentUser', true);
          else comments.data[i].setDataValue('isDislikedByCurrentUser', true);
          continue;
        }
      }
    }
    return comments;
  }

  async createComment(
    inputComment: CommentCreationAttributes,
    commentMiddleware: ICommentMiddleware
  ): Promise<CommentModel> {
    await commentMiddleware(inputComment);
    const comment = await super.create(inputComment);
    return comment;
  }

  async updateCommentById(
    { id, data }: { id: string; data: CommentCreationAttributes },
    CommentMiddleware: ICommentMiddleware,
    initiator: UserAttributes
  ): Promise<CommentModel> {
    await CommentMiddleware(data);
    if (!Object.keys(data).length) {
      triggerServerError('You should specify at least one valid field to update', 400);
    }
    const oldComment = await this.repository.getCommentById(id);
    if (oldComment.userId !== initiator.id) {
      triggerServerError('Access forbidden', 403);
    }
    const newComment = this.repository.updateById(id, data);
    return newComment;
  }

  async deleteCommentById(id: string): Promise<CommentModel> {
    return await super.deleteById(id);
  }
}
