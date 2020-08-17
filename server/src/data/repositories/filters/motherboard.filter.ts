import { IFilter } from './base.filter';
import { IRamTypeFilter } from './ramType.filter';
import { ISocketFilter } from './socket.filter';
import { FilterByIdType, notNull } from './types';
import { SwaggerSchema } from '../../models/swaggerSchema';

export class IMotherboardFilter extends IFilter {
  constructor(primal?: IMotherboardFilter) {
    super(primal);
    if (!primal) return;

    if (primal.ramTypeId) {
      this.ramTypeId = primal.ramTypeId;
    }
    if (primal.socketId) {
      this.socketId = primal.socketId;
    }
  }
  ramTypeId: FilterByIdType = notNull;
  socketId: FilterByIdType = notNull;

  static schema: SwaggerSchema = {
    type: 'object',
    properties: {
      ...IFilter.schema.properties,
      ramTypeId: {
        type: 'integer',
        minimum: 1,
        nullable: true,
      },
      socketId: {
        type: 'integer',
        minimum: 1,
        nullable: true
      }
    }
  }
}
