import { FastifyRequest } from 'fastify';
import { PowerSupplyCreationAttributes } from '../../data/models/powersupply';
import { SwaggerSchema } from '../../data/models/swaggerSchema';
import { UserAttributes } from '../../data/models/user';
import { IPowerSupplyFilter } from '../../data/repositories/filters/powerSupply.filter';

export type GetOnePowerSuppliesRequest = FastifyRequest<{
  Querystring: IPowerSupplyFilter;
}> & { user: UserAttributes };

export type GetOnePowerSupplyRequest = FastifyRequest<{
  Params: { id: string };
}> & { user: UserAttributes };

export type PostPowerSupplyRequest = FastifyRequest<{
  Body: PowerSupplyCreationAttributes;
}> & { user: UserAttributes };

export type PutPowerSupplyRequest = FastifyRequest<{
  Params: { id: string };
  Body: PowerSupplyCreationAttributes;
}> & { user: UserAttributes };

export type DeletePowerSupplyRequest = FastifyRequest<{
  Params: { id: string };
}> & { user: UserAttributes };

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
      minLength: 1,
      example: 'yam name',
      nullable: false,
    },
    power: {
      type: 'integer',
      example: 750,
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

export const CreatePowerSupplySchema: SwaggerSchema = {
  type: 'object',
  required: ['name', 'power'],
  properties: {
    name: {
      type: 'string',
      minLength: 1,
      example: 'Power supply name',
      nullable: false,
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
      minLength: 1,
      example: 'Power supply name',
      nullable: true,
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
