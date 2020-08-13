import { CommentCreationAttributes, CommentModel, CommentStatic } from '../models/comment';
import { BaseRepository, IWithMeta, RichModel } from './base.repository';
import { ICommentFilter } from './filters/comment.filter';

export class CommentRepository extends BaseRepository<CommentModel, ICommentFilter> {
  constructor(private model: CommentStatic) {
    super(<RichModel>model, ICommentFilter);
  }

  async getCommentById(id: string): Promise<CommentModel> {
    return await this.getById(id);
  }

  async getAllComments(filter: ICommentFilter): Promise<IWithMeta<CommentModel>> {
    return await this.getAll(filter, {
      group: ['comment.id'],
    });
  }

  async createComment(inputComment: CommentCreationAttributes): Promise<CommentModel> {
    return this.model.create(inputComment);
  }

  async updateCommentById(id: string, inputComment: CommentCreationAttributes): Promise<CommentModel> {
    return await this.updateById(id, inputComment);
  }

  async deleteCommentById(id: string): Promise<void> {
    await this.deleteById(id);
  }
}
