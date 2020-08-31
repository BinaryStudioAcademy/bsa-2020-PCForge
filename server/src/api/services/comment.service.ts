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

  async getAllComments(filter: ICommentFilter): Promise<IWithMeta<CommentModel>> {
    return await this.repository.getAllComments(filter);
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
    const oldComment = await this.repository.getCommentById(id);
    if (!(oldComment.userId === initiator.id || initiator.isAdmin)) {
      triggerServerError('Access forbidden', 403);
    }
    const newComment = this.repository.updateById(id, data);
    return newComment;
  }

  async deleteCommentById(id: string): Promise<CommentModel> {
    return await super.deleteById(id);
  }
}
