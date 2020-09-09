import { IFilter } from './base.filter';
import { FilterByNumberType, FilterByNameType, notNull } from './types';
import { SwaggerSchema } from '../../models/swaggerSchema';

export class IGameFilter extends IFilter {
  constructor() {
    super();
  }
  name: FilterByNameType = null;
  year: FilterByNumberType = notNull;
  id: FilterByNumberType = notNull;
  searchString?: string = '';

  orderBy: {
    cpu: {
      recommended: 'ASC' | 'DESC';
    };
    gpu: {
      recommended: 'ASC' | 'DESC';
    };
    ram: {
      recommended: 'ASC' | 'DESC';
    };
  } = null;

  static schema: SwaggerSchema = {
    type: 'object',
    properties: {
      ...IFilter.schema.properties,
      year: {
        type: 'integer',
        nullable: true,
      },
      name: {
        type: 'string',
        nullable: true,
      },
      orderBy: {
        type: 'object',
        properties: {
          cpu: {
            type: 'object',
            properties: {
              recommended: {
                type: 'string',
              },
            },
          },
          gpu: {
            type: 'object',
            properties: {
              recommended: {
                type: 'string',
              },
            },
          },
          ram: {
            type: 'object',
            properties: {
              recommended: {
                type: 'string',
              },
            },
          },
        },
        nullable: true,
      },
      searchString: {
        type: 'string',
        nullable: true,
      },
    },
  };
}
