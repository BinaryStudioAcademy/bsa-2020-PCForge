import { SwaggerSchema } from '../../models/swaggerSchema';

export class IFilter {
  constructor() {
    // do nothing
  }
  from = 0;
  count = 50;

  static schema: SwaggerSchema = {
    type: 'object',
    properties: {
      from: {
        type: 'integer',
        minimum: 0,
        default: 0,
      },
      count: {
        type: 'integer',
        maximum: 100,
        default: 50,
      },
    },
  };
}
