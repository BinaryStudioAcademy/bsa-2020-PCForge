import { IFilter } from './base.filter';
import { FilterByIdType, FilterByBooleanType, notNull } from './types';
import { SwaggerSchema } from '../../models/swaggerSchema';

export class ICommentRateFilter extends IFilter {
  constructor() {
    super();
  }
  commentId: FilterByIdType = notNull;
  isLiked: FilterByBooleanType = notNull;
  static schema: SwaggerSchema = {
    type: 'object',
    properties: {
      //...IFilter.schema.properties,
      commentId: {
        oneOf: [
          {
            type: 'integer',
            minimum: 1,
            nullable: true,
          },
          {
            type: 'array',
            items: {
              type: 'integer',
              minimum: 1,
            },
          },
        ],
      },
      isLiked: {
        type: 'boolean',
        minimum: 1,
        nullable: true,
      },
    },
  };
}
