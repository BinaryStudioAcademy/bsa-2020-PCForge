import { CommentCreationAttributes, CommentModel } from '../../data/models/comment';
import { IWithMeta } from '../../data/repositories/base.repository';
import { ICommentFilter } from '../../data/repositories/filters/comment.filter';
import { CommentRepository } from '../../data/repositories/comment.repository';
import { ICommentMiddleware } from '../middlewares/comment.middleware';

export class CommentService {
  constructor(private repository: CommentRepository) {}

  async getCommentById(id: string): Promise<CommentModel> {
    return await this.repository.getCommentById(id);
  }

  async getAllComments(filter: ICommentFilter): Promise<IWithMeta<CommentModel>> {
    return await this.repository.getAllComments(filter);
  }

  async createComment(
    inputComment: CommentCreationAttributes,
    commentMiddleware: ICommentMiddleware
  ): Promise<CommentModel> {
    await commentMiddleware(inputComment);
    return await this.repository.createComment(inputComment);
  }

  async updateCommentById(
    inputComment: { id: string; data: CommentCreationAttributes },
    CommentMiddleware: ICommentMiddleware
  ): Promise<CommentModel> {
    const { id, data } = inputComment;
    await CommentMiddleware(data);
    const oldComment = await this.repository.getCommentById(id);
    if (!oldComment) {
      throw new Error(`Comment with id: ${id} does not exists`);
    }
    return await this.repository.updateCommentById(id, data);
  }

  async deleteCommentById(id: string): Promise<void> {
    await this.repository.deleteCommentById(id);
  }
}
