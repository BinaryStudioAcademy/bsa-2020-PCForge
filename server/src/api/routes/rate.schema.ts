import { FastifyRequest } from 'fastify';
import { RateCreationAttributes } from '../../data/models/rate';
import { IRateFilter } from '../../data/repositories/filters/rate.filter';
import { SwaggerSchema } from '../../data/models/swaggerSchema';
import { UserAttributes } from '../../data/models/user';

export type GetAllRatesRequest = FastifyRequest<{
  Params: { id: string };
  Querystring: IRateFilter;
}> & { user: UserAttributes };

export type GetOneRateRequest = FastifyRequest<{
  Params: { id: string };
}> & { user: UserAttributes };

export type PostRateRequest = FastifyRequest<{
  Body: RateCreationAttributes;
}> & { user: UserAttributes };

export type PutRateRequest = FastifyRequest<{
  Params: { id: string };
  Body: RateCreationAttributes;
}> & { user: UserAttributes };

export type DeleteRateRequest = FastifyRequest<{
  Params: { id: string };
}> & { user: UserAttributes };

export const RateSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: false,
    },
    ratebleType: {
      type: 'string',
      minLength: 1,
      example: 'game',
      enum: ['news', 'game', 'setup'],
      nullable: false,
    },
    userId: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: false,
    },
    ratebleId: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: false,
    },
    value: {
      type: 'number',
      example: 4.5,
      minimum: 0,
      nullable: false,
    },
    createdAt: {
      type: 'string',
      minLength: 1,
      nullable: false,
      format: 'date-time',
    },
    updatedAt: {
      type: 'string',
      minLength: 1,
      nullable: false,
      format: 'date-time',
    },
  },
};

export const GetRatesAverage = {
  schema: {
    querystring: {
      type: 'object',
      properties: {
        ratebleType: {
          type: 'string',
          minLength: 1,
          enum: ['news', 'game', 'setup'],
          nullable: false,
        },
        ratebleId: {
          type: 'integer',
          minimum: 1,
          nullable: false,
        },
      },
    },
    response: {
      200: {
        type: 'object',
        properties: {
          average: {
            type: 'number',
            nullable: false,
            example: 2.5,
          },
        },
      },
    },
  },
};

export const GetAllRates: SwaggerSchema = {
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
      items: RateSchema,
    },
  },
};

export const CreateRateSchema: SwaggerSchema = {
  type: 'object',
  required: ['ratebleType', 'ratebleId', 'value'],
  additionalProperties: false,
  properties: {
    ratebleType: {
      type: 'string',
      minLength: 1,
      example: 'game',
      enum: ['news', 'game', 'setup'],
      nullable: false,
    },
    ratebleId: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: false,
    },
    value: {
      type: 'number',
      example: 4.5,
      minimum: 0,
      nullable: false,
    },
  },
};

export const UpdateRateSchema: SwaggerSchema = {
  type: 'object',
  required: ['ratebleType', 'ratebleId', 'value'],
  additionalProperties: false,
  properties: {
    ratebleType: {
      type: 'string',
      minLength: 1,
      example: 'game',
      enum: ['news', 'game', 'setup'],
      nullable: true,
    },
    ratebleId: {
      type: 'integer',
      example: 1,
      nullable: true,
    },
    value: {
      type: 'number',
      example: 4.2,
      nullable: true,
    },
  },
};
