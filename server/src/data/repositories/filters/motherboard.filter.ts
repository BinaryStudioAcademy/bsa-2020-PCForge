import { IFilter } from './base.filter';
import { IRamTypeFilter } from './ramType.filter';
import { ISocketFilter } from './socket.filter';
import { FilterByBooleanType, FilterByIdType, FilterByNumberType, notNull } from './types';
import { SwaggerSchema } from '../../models/swaggerSchema';

export class IMotherboardFilter extends IFilter {
  constructor() {
    super();
  }
  socketId: FilterByIdType = notNull;
  ramTypeId: FilterByIdType = notNull;
  sata: FilterByNumberType = notNull;
  m2: FilterByBooleanType = notNull;

  static schema: SwaggerSchema = {
    type: 'object',
    properties: {
      ...IFilter.schema.properties,
      ramTypeId: {
        oneOf: [{
          type: 'integer',
          minimum: 1
        }, {
          type: 'array',
          items: {
            type: 'integer',
            minimum: 1,
          }
        }],
        nullable: true
      },
      socketId: {
        oneOf: [{
          type: 'integer',
          minimum: 1
        }, {
          type: 'array',
          items: {
            type: 'integer',
            minimum: 1,
          }
        }],
        nullable: true
      },
      sata: {
        type: 'integer',
        minimum: 1,
        nullable: true,
      },
      m2: {
        type: 'boolean',
        minimum: 1,
        nullable: true,
      },
    },
  };
}
