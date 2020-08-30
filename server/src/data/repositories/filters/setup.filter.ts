import { IFilter } from './base.filter';
import { SwaggerSchema } from '../../models/swaggerSchema';

export class ISetupFilter extends IFilter {
  constructor() {
    super();
  }

  authorId?: string = null;
  sort?: string = 'mostRated';

  static schema: SwaggerSchema = {
    type: 'object',
    properties: {
      authorId: {
        type: 'string',
      },
      sort: {
        type: 'string',
      },
      ...IFilter.schema.properties,
    },
  };
}
