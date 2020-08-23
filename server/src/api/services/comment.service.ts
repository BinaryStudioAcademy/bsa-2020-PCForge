import { CommentCreationAttributes, CommentModel } from '../../data/models/comment';
import { IWithMeta } from '../../data/repositories/base.repository';
import { ICommentFilter } from '../../data/repositories/filters/comment.filter';
import { CommentRepository } from '../../data/repositories/comment.repository';
import { ICommentMiddleware } from '../middlewares/comment.middleware';
import { triggerServerError } from '../../helpers/global.helper';
import { BaseService } from './base.service';

export class CommentService extends BaseService<CommentModel, CommentRepository> {
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
    inputComment: { id: string; data: CommentCreationAttributes },
    CommentMiddleware: ICommentMiddleware
  ): Promise<CommentModel> {
    const { id, data } = inputComment;
    await CommentMiddleware(data);

    const oldComment = await this.repository.getCommentById(id);
    if (!oldComment) {
      triggerServerError(`Comment with id: ${id} does not exists`, 404);
    }
    return await this.repository.updateCommentById(id, data);
  }

  async deleteCommentById(id: string): Promise<void> {
    await this.repository.deleteCommentById(id);
  }
}
