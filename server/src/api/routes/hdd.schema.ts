import { FastifyRequest } from 'fastify';
import { HddCreationAttributes } from '../../data/models/hdd';
import { IHddFilter } from '../../data/repositories/filters/hdd.filter';
import { SwaggerSchema } from '../../data/models/swaggerSchema';
import { UserAttributes } from '../../data/models/user';

export type GetAllHddsRequest = FastifyRequest<{
  Querystring: IHddFilter;
}> & { user: UserAttributes };

export type GetOneHddRequest = FastifyRequest<{
  Params: { id: string };
}> & { user: UserAttributes };

export type PostHddRequest = FastifyRequest<{
  Body: HddCreationAttributes;
}> & { user: UserAttributes };

export type PutHddRequest = FastifyRequest<{
  Params: { id: string };
  Body: HddCreationAttributes;
}> & { user: UserAttributes };

export type DeleteHddRequest = FastifyRequest<{
  Params: { id: string };
}> & { user: UserAttributes };

export const HddSchema: SwaggerSchema = {
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
      example: 'Western Digital Blue WD10SPCX 1TB 2.5" SATA Hard Drive',
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
      minimum: 1,
      nullable: false,
    },
    size: {
      type: 'number',
      example: 3.5,
      minimum: 0.1,
      nullable: false,
    },
    rpm: {
      type: 'integer',
      example: 5400,
      minimum: 1,
      nullable: false,
    },
    ram: {
      type: 'integer',
      example: 16,
      minimum: 0,
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

export const CreateHddSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      example: 'Western Digital Blue WD10SPCX 1TB 2.5" SATA Hard Drive',
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
      minimum: 1,
      nullable: false,
    },
    size: {
      type: 'number',
      example: 3.5,
      minimum: 0.1,
      nullable: false,
    },
    rpm: {
      type: 'integer',
      example: 5400,
      minimum: 1,
      nullable: false,
    },
    ram: {
      type: 'integer',
      example: 16,
      minimum: 0,
      nullable: false,
    },
  },
};

export const UpdateHddSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      example: 'Western Digital Blue WD10SPCX 1TB 2.5" SATA Hard Drive',
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
    rpm: {
      type: 'integer',
      example: 5400,
      minimum: 1,
      nullable: false,
    },
    ram: {
      type: 'integer',
      example: 16,
      minimum: 0,
      nullable: false,
    },
  },
};

export const GetAllHddsResponse: SwaggerSchema = {
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
      items: HddSchema,
    },
  },
};
