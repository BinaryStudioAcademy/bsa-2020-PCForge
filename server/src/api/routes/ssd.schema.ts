import { FastifyRequest } from 'fastify';
import { SsdCreationAttributes } from '../../data/models/ssd';
import { ISsdFilter } from '../../data/repositories/filters/ssd.filter';
import { SwaggerSchema } from '../../data/models/swaggerSchema';
import { UserAttributes } from '../../data/models/user';

export type GetAllSsdsRequest = FastifyRequest<{
  Querystring: ISsdFilter;
}> & { user: UserAttributes };

export type GetOneSsdRequest = FastifyRequest<{
  Params: { id: string };
}> & { user: UserAttributes };

export type PostSsdRequest = FastifyRequest<{
  Body: SsdCreationAttributes;
}> & { user: UserAttributes };

export type PutSsdRequest = FastifyRequest<{
  Params: { id: string };
  Body: SsdCreationAttributes;
}> & { user: UserAttributes };

export type DeleteSsdRequest = FastifyRequest<{
  Params: { id: string };
}> & { user: UserAttributes };

export const SsdSchema: SwaggerSchema = {
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
      minimum: 0,
      nullable: false,
    },
    size: {
      type: 'number',
      example: 3.5,
      minimum: 0,
      nullable: false,
    },
    m2: {
      type: 'boolean',
      example: false,
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

export const CreateSsdSchema: SwaggerSchema = {
  type: 'object',
  properties: {
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
      minimum: 0,
      nullable: false,
    },
    size: {
      type: 'number',
      example: 3.5,
      minimum: 0,
      nullable: false,
    },
    m2: {
      type: 'boolean',
      example: false,
      nullable: false,
    },
  },
};

export const UpdateSsdSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      example: 'Micron 5100 ECO MTFDDAK3T8TBY-1AR1ZABYY 3.84TB 2.5" 6Gbps TLC SSD',
      nullable: false,
      minLength: 1,
    },
    sata: {
      type: 'integer',
      example: 3,
      nullable: false,
    },
    capacity: {
      type: 'integer',
      example: 1024,
      minimum: 0,
      nullable: false,
    },
    size: {
      type: 'number',
      example: 3.5,
      minimum: 0,
      nullable: false,
    },
    m2: {
      type: 'boolean',
      example: false,
      nullable: false,
    },
  },
};

export const GetAllSsdsResponse: SwaggerSchema = {
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
      items: SsdSchema,
    },
  },
};
