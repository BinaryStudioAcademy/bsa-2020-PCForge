import { FastifyRequest } from 'fastify';
import { ISsdFilter } from '../../data/repositories/filters/ssd.filter';
import { SwaggerSchema } from '../../data/models/swaggerSchema';
import { UserAttributes } from '../../data/models/user';
import { IStorageFilter } from '../../data/repositories/filters/storage.filter';

export type GetAllStoragesRequest = FastifyRequest<{
  Querystring: IStorageFilter;
}> & { user: UserAttributes };

export const StorageSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: false,
    },
    name: {
      type: 'string',
      example: 'Micron 5100 ECO MTFDDAK3T8TBY-1AR1ZABYY 3.84TB 2.5" 6Gbps TLC SSD',
      minLength: 1,
      nullable: false,
    },
    sata: {
      type: 'integer',
      example: 3,
      nullable: false,
    },
    capacity: {
      type: 'integer',
      example: 1024,
      minimum: 1,
      nullable: false,
    },
    size: {
      type: 'number',
      example: 3.5,
      minimum: 0.1,
      nullable: false,
    },
    m2: {
      type: 'boolean',
      example: false,
      nullable: false,
    },
    type: {
      type: 'string',
      example: 'ssd',
      nullable: false,
    },
    createdAt: {
      type: 'string',
      nullable: false,
      format: 'date-time',
    },
    updatedAt: {
      type: 'string',
      nullable: false,
      format: 'date-time',
    },
  },
};

export const GetAllStoragesResponse: SwaggerSchema = {
  type: 'object',
  properties: {
    meta: {
      type: 'object',
      properties: {
        globalCount: {
          type: 'integer',
          nullable: false,
        },
        countAfterFiltering: {
          type: 'integer',
          nullable: false,
        },
      },
    },
    data: {
      type: 'array',
      items: StorageSchema,
    },
  },
};
