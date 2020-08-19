import { IFilter } from './base.filter';
import { SwaggerSchema } from '../../models/swaggerSchema';

export class ISetupFilter extends IFilter {
  constructor() {
    super();
  }

  static schema: SwaggerSchema = {
    type: 'object',
    properties: {
      ...IFilter.schema.properties,
    },
  };
}
