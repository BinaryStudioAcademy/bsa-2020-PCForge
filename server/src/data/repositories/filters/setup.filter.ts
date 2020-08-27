import { IFilter } from './base.filter';
import { SwaggerSchema } from '../../models/swaggerSchema';

export class ISetupFilter extends IFilter {
  constructor() {
    super();
  }

  authorId?: string = null;

  static schema: SwaggerSchema = {
    type: 'object',
    properties: {
      authorId: {
        type: 'string',
        nullable: true,
      },
      ...IFilter.schema.properties,
    },
  };
}
