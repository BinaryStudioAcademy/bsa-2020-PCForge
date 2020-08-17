import { IFilter } from './base.filter';
import { FilterByIdType, notNull } from './types';
import { SwaggerSchema } from '../../models/swaggerSchema';
import { Op } from 'sequelize';

export class ICommentFilter extends IFilter {
  constructor(primal?: ICommentFilter) {
    super(primal);
    if (!primal) return;

    if (primal.commentableId) {
      this.commentableId = {[Op.eq]: primal.commentableId};
    }
    if (primal.commentableType) {
      this.commentableType = {[Op.eq]: primal.commentableType};
    }
  }

  commentableType: FilterByIdType = notNull;
  commentableId: FilterByIdType = notNull;

  static schema: SwaggerSchema = {
    type: 'object',
    properties: {
      ...IFilter.schema.properties,
      commentableType: {
        type: 'string',
        enum: ['news', 'game', 'setup'],
        nullable: true,
      },
      commentableId: {
        type: 'integer',
        minimum: 1,
        nullable: true,
      }
    }
  }
}
