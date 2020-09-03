import { CommentCreationAttributes, CommentModel, CommentStatic } from '../models/comment';
import { BaseRepository, IWithMeta, RichModel } from './base.repository';
import { ICommentFilter } from './filters/comment.filter';
import { mergeFilters } from './filters/helper';
import { UserStatic } from '../models/user';
import { CommentRateStatic } from '../models/commentRates';

export class CommentRepository extends BaseRepository<CommentModel, CommentCreationAttributes, ICommentFilter> {
  constructor(
    private model: CommentStatic,
    private userModel: UserStatic,
    private commentRateModel: CommentRateStatic
  ) {
    super(<RichModel>model, ICommentFilter);
  }

  async getCommentById(id: string): Promise<CommentModel> {
    return await this.getById(id);
  }

  async getAllComments(inputFilter: ICommentFilter): Promise<IWithMeta<CommentModel>> {
    const filter = mergeFilters<ICommentFilter>(new ICommentFilter(), inputFilter);
    return await this.getAll(
      {
        group: ['comment.id'],
        include: [
          {
            model: this.commentRateModel,
            attributes: [],
          },
          /*{ , 'user.id'
            model: this.userModel,
            as: 'user',
          },*/
        ],
        where: {
          commentableId: filter.commentableId,
          commentableType: filter.commentableType,
        },
        attributes: {
          include: [
            [
              `(SELECT COUNT(*)
              FROM "commentRates", "comments"
              WHERE "comments"."id" = "commentRates"."commentId" AND "commentRates"."isLiked" = true)`,
              'countLikes',
            ],
          ],
        },
      },
      filter
    );
  }
}
