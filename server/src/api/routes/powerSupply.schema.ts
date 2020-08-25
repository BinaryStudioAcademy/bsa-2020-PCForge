import { FastifyRequest } from 'fastify';
import { PowerSupplyCreationAttributes } from '../../data/models/powersupply';
import { IFilter } from '../../data/repositories/filters/base.filter';
import { SwaggerSchema } from '../../data/models/swaggerSchema';

export type GetOnePowerSuppliesRequest = FastifyRequest<{
  Querystring: IFilter;
}>;

export type GetOnePowerSupplyRequest = FastifyRequest<{
  Params: { id: string };
}>;

export type PostPowerSupplyRequest = FastifyRequest<{
  Body: PowerSupplyCreationAttributes;
}>;

export type PutPowerSupplyRequest = FastifyRequest<{
  Params: { id: string };
  Body: PowerSupplyCreationAttributes;
}>;

export type DeletePowerSupplyRequest = FastifyRequest<{
  Params: { id: string };
}>;

export const PowerSupplySchema: SwaggerSchema = {
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
      example: 'yam name',
      nullable: false,
      minLength: 1,
    },
    power: {
      type: 'integer',
      example: 750,
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

export const CreatePowerSupplySchema: SwaggerSchema = {
  type: 'object',
  required: ['name', 'power'],
  properties: {
    name: {
      type: 'string',
      example: 'Power supply name',
      nullable: false,
      minLength: 1,
    },
    power: {
      type: 'integer',
      example: 750,
      minimum: 0,
      nullable: false,
    },
  },
};

export const UpdatePowerSupplySchema: SwaggerSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      example: 'Power supply name',
      nullable: true,
      minLength: 1,
    },
    power: {
      type: 'integer',
      example: 750,
      minimum: 0,
      nullable: true,
    },
  },
};

export const GetAllPowerSuppliesResponse: SwaggerSchema = {
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
      items: PowerSupplySchema,
    },
  },
};
