import { triggerServerError } from '../../helpers/global.helper';
import { BaseService } from './base.service';
import { IWithMeta } from '../../data/repositories/base.repository';
import { CommentRateCreationAttributes, CommentRateAttributes, CommentRateModel } from '../../data/models/commentRates';
import { ICommentRateFilter } from '../../data/repositories/filters/commentRate.filter';
import { CommentRateRepository } from '../../data/repositories/commentRate.repository';
import { ICommentRateMiddleware } from '../middlewares/commentRate.middleware';

export class CommentRateService extends BaseService<
  CommentRateModel,
  CommentRateCreationAttributes,
  CommentRateRepository
> {
  constructor(private repository: CommentRateRepository) {
    super(repository);
  }

  async getAllCommentsRates(filter: ICommentRateFilter): Promise<IWithMeta<CommentRateModel>> {
    return await this.repository.getAllCommentRates(filter);
  }

  async getCommentRateById(id: string): Promise<CommentRateModel> {
    const commentRate = await this.repository.getCommentRateById(id);
    if (!commentRate) {
      triggerServerError(`Comment rate with ${id} does not exist`, 404);
    }
    return commentRate;
  }

  async createCommentRate(
    request: CommentRateCreationAttributes,
    commentRateMiddleware: ICommentRateMiddleware
  ): Promise<CommentRateModel> {
    await commentRateMiddleware(request);

    const prevCommentRate = await this.repository.getCommentRateByUserAndCommentId(request.userId, request.commentId);
    if (prevCommentRate) {
      const objectPrevCommentRate: CommentRateAttributes = prevCommentRate.toJSON() as CommentRateAttributes;
      if (objectPrevCommentRate.isLiked === request.isLiked) {
        const commentRate = await this.repository.getById(objectPrevCommentRate.id.toString());
        await this.repository.deleteById(objectPrevCommentRate.id.toString());
        return commentRate;
      } else {
        return await this.repository.updateById(objectPrevCommentRate.id, request);
      }
    }
    const commentRate = await this.repository.create(request);
    return commentRate;
  }
}
