import { IFilter } from './base.filter';
import { FilterByBooleanType, FilterByIdType, FilterByNumberType, notNull, FilterByNameType } from './types';
import { SwaggerSchema } from '../../models/swaggerSchema';

export class IMotherboardFilter extends IFilter {
  constructor() {
    super();
  }
  id: FilterByNumberType = notNull;
  excludedId: FilterByNumberType = [];
  socketId: FilterByIdType = notNull;
  ramTypeId: FilterByIdType = notNull;
  sata: FilterByNumberType = notNull;
  m2: FilterByBooleanType = notNull;
  name: FilterByNameType = '';

  static schema: SwaggerSchema = {
    type: 'object',
    properties: {
      ...IFilter.schema.properties,
      ramTypeId: {
        type: 'integer',
        minimum: 1,
        nullable: true,
      },
      ramTypeIds: {
        type: 'array',
        items: {
          type: 'integer',
          minimum: 1,
        },
        nullable: true,
      },
      socketId: {
        type: 'integer',
        minimum: 1,
        nullable: true,
      },
      socketIds: {
        type: 'array',
        items: {
          type: 'integer',
          minimum: 1,
        },
        nullable: true,
      },
      name: {
        type: 'string',
        nullable: true,
      },
      sata: {
        type: 'integer',
        minimum: 1,
        nullable: true,
      },
      sataMultiple: {
        type: 'array',
        items: {
          type: 'integer',
          minimum: 1,
        },
      },
      m2: {
        type: 'boolean',
        minimum: 1,
        nullable: true,
      },
    },
  };
}
