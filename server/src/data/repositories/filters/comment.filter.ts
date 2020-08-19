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
