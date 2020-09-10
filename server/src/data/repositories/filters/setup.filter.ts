import { IFilter } from './base.filter';
import { SwaggerSchema } from '../../models/swaggerSchema';
import { FilterByNumberType, notNull } from './types';

export type Sort = 'mostRated' | 'newest' | 'oldest' | 'commendable';
export class ISetupFilter extends IFilter {
  constructor() {
    super();
  }
  id?: FilterByNumberType = notNull;
  authorId?: string = null;
  sort?: Sort = 'mostRated';
  searchString?: string = '';

  static schema: SwaggerSchema = {
    type: 'object',
    properties: {
      authorId: {
        type: 'string',
        nullable: true,
      },
      sort: {
        type: 'string',
      },
      ...IFilter.schema.properties,
      searchString: {
        type: 'string',
        nullable: true,
      },
    },
  };
}
