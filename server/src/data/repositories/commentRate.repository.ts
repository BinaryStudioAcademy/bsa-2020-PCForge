import { BaseRepository, RichModel, IWithMeta } from './base.repository';
import { CommentRateModel, CommentRateStatic, CommentRateCreationAttributes } from '../models/commentRates';
import { ICommentRateFilter } from './filters/commentRate.filter';

export class CommentRateRepository extends BaseRepository<
  CommentRateModel,
  CommentRateCreationAttributes,
  ICommentRateFilter
> {
  constructor(private model: CommentRateStatic) {
    super(<RichModel>model, ICommentRateFilter);
  }

  async getCommentRateById(id: string): Promise<CommentRateModel> {
    return await this.getById(id);
  }

  async getCommentRateByUserAndCommentId(userId: number, commentId: number): Promise<CommentRateModel | null> {
    return this.model.findOne({
      where: {
        userId,
        commentId,
      },
    });
  }

  async getAllCommentRates(inputFilter: ICommentRateFilter): Promise<IWithMeta<CommentRateModel>> {
    return await this.getAll(
      {
        group: ['commentRates.id'],
        where: {
          commentId: inputFilter.commentId,
          isLiked: inputFilter.isLiked,
        },
      },
      inputFilter
    );
  }

  async createCommentRate(inputCommentRate: CommentRateCreationAttributes): Promise<CommentRateModel> {
    return this.model.create(inputCommentRate);
  }
}
