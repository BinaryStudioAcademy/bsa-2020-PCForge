import { IFilter } from './base.filter';
import { FilterByIdType, notNull, FilterByNameType } from './types';
import { SwaggerSchema } from '../../models/swaggerSchema';

export class ICommentFilter extends IFilter {
  constructor() {
    super();
  }
  commentableType: FilterByNameType = notNull;
  commentableId: FilterByIdType = notNull;

  static schema: SwaggerSchema = {
    type: 'object',
    properties: {
      ...IFilter.schema.properties,
      commentableType: {
        type: 'string',
        minLength: 1,
        enum: ['news', 'game', 'setup'],
        nullable: true,
      },
      commentableId: {
        oneOf: [
          {
            type: 'integer',
            minimum: 1,
          },
          {
            type: 'array',
            items: {
              type: 'integer',
              minimum: 1,
            },
          },
        ],
        nullable: true,
      },
    },
  };
}
