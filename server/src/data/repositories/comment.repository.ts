import { CommentCreationAttributes, CommentModel, CommentStatic } from '../models/comment';
import { BaseRepository, IWithMeta, RichModel } from './base.repository';
import { ICommentFilter } from './filters/comment.filter';
import { mergeFilters } from './filters/helper';
import { UserStatic } from '../models/user';
import { CommentRateStatic } from '../models/commentRates';
import { RateStatic } from '../models/rate';

export class CommentRepository extends BaseRepository<CommentModel, CommentCreationAttributes, ICommentFilter> {
  constructor(
    private model: CommentStatic,
    private userModel: UserStatic,
    private commentRateModel: CommentRateStatic,
    private rateItemModel: RateStatic
  ) {
    super(<RichModel>model, ICommentFilter);
  }

  async getCommentById(id: string): Promise<CommentModel> {
    return await this.getById(id);
  }

  async getAllComments(inputFilter: ICommentFilter): Promise<IWithMeta<CommentModel>> {
    const filter = mergeFilters<ICommentFilter>(new ICommentFilter(), inputFilter);
    const result = await this.model.findAndCountAll(
      {
        group: ['comment.id', 'commentRates.id', 'user.id', 'user->rates.id'],
        attributes: {
          include: [
            [
              `(SELECT COUNT(*)
                FROM "commentRates", "comments"
                WHERE "comments"."id" = "commentRates"."commentId"
                  AND "commentRates"."isLiked" = true
                  AND "comments"."id" = "comment"."id")`,
              'countLikes',
            ],
            [
              `(SELECT COUNT(*)
                FROM "commentRates",
                      "comments"
                WHERE "comments"."id" = "commentRates"."commentId"
                  AND "commentRates"."isLiked" = false
                  AND "comments"."id" = "comment"."id")`,
              'countDislikes',
            ],
            [
              `(SELECT "rates"."value"
                FROM "rates",
                     "comments"
                WHERE "comments"."userId" = "rates"."userId"
                  AND "comments"."commentableId" = "rates"."ratebleId"
                  AND "comments"."id" = "comment"."id")`,
              'itemRateByAuthorComment',
            ],
          ],
        },
        include: [
          {
            model: this.commentRateModel,
            duplicating: false,
          },
          {
            model: this.userModel,
            as: 'user',
            attributes: ['id', 'name', 'email', 'avatar'],
            include: [
              {
                model: this.rateItemModel,
              },
            ],
          },
        ],
        where: {
          commentableId: filter.commentableId,
          commentableType: filter.commentableType,
        },
        order: [['createdAt', 'DESC']],
      } //,
    );
    const globalCount = result.count;
    const countAfterFiltering = result.rows.length;
    return {
      meta: { globalCount, countAfterFiltering },
      data: result.rows,
    };
  }
}
