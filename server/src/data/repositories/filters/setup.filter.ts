import { IFilter } from './base.filter';
import { SwaggerSchema } from '../../models/swaggerSchema';

export type Sort = 'mostRated' | 'newest' | 'oldest' | 'commendable';
export class ISetupFilter extends IFilter {
  constructor() {
    super();
  }

  authorId?: string = null;
  sort?: Sort = 'mostRated';

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
    },
  };
}
