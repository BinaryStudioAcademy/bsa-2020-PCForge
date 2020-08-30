import { IFilter } from './base.filter';
import { SwaggerSchema } from '../../models/swaggerSchema';

export class ISetupFilter extends IFilter {
  constructor() {
    super();
  }

  authorId?: string = null;
  orderBy?: string = 'newest';

  static schema: SwaggerSchema = {
    type: 'object',
    properties: {
      authorId: {
        type: 'string',
      },
      orderBy: {
        type: 'string',
      },
      ...IFilter.schema.properties,
    },
  };
}
