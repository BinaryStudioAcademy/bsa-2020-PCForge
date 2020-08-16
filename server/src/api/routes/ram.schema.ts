import { FastifyRequest } from 'fastify';
import { RamCreationAttributes } from '../../data/models/ram';
import { IRamFilter } from '../../data/repositories/filters/ram.filter';
import { SwaggerSchema } from '../../data/models/swaggerSchema';
import { RamTypeSchema } from './ramType.schema';

export type GetOneRamRequest = FastifyRequest<{
  Params: { id: string };
}>;

export type GetAllRamsRequest = FastifyRequest<{
  Querystring: IRamFilter;
}>;

export type PostRamRequest = FastifyRequest<{
  Body: RamCreationAttributes;
}>;

export type PutRamRequest = FastifyRequest<{
  Params: { id: string };
  Body: RamCreationAttributes;
}>;

export type DeleteRamRequest = FastifyRequest<{
  Params: { id: string };
}>;

export const RamSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'number',
      example: 1,
      minimum: 1,
      nullable: false
    },
    name: {
      type: 'string',
      example: 'yam name',
      nullable: false,
    },
    memorySize: {
      type: 'integer',
      example: 8,
      minimum: 0,
      nullable: false,
    },
    frequency: {
      type: 'integer',
      example: 4200,
      minimum: 0,
      nullable: false,
    },
    power: {
      type: 'number',
      example: 1.35,
      minimum: 0,
      nullable: false
    },
    typeId: {
      type: 'number',
      example: 1,
      minimum: 1,
      nullable: false
    },
    ramType: RamTypeSchema,
    createdAt: {
      type: 'string',
      nullable: false,
      format: 'date-time'
    },
    updatedAt: {
      type: 'string',
      nullable: false,
      format: 'date-time'
    }
  }
}

export const CreateRamSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      example: 'Ram name',
      nullable: false
    },
    memorySize: {
      type: 'integer',
      example: 8,
      minimum: 0,
      nullable: false
    },
    frequency: {
      type: 'integer',
      example: 4200,
      minimum: 0,
      nullable: false,
    },
    power: {
      type: 'number',
      example: 1.35,
      minimum: 0,
      nullable: false
    },
    typeId: {
      type: 'number',
      example: 1,
      minimum: 0,
      nullable: false
    },
  }
}

export const UpdateRamSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      example: 'Ram name',
      nullable: true
    },
    memorySize: {
      type: 'integer',
      example: 8,
      nullable: true
    },
    frequency: {
      type: 'integer',
      example: 4200,
      nullable: true,
    },
    power: {
      type: 'number',
      example: 1.35,
      nullable: true
    },
    typeId: {
      type: 'number',
      example: 1,
      nullable: true
    },
  }
}

export const GetAllRamResponse: SwaggerSchema = {
  type: 'object',
  properties: {
    meta: {
      type: 'object',
      properties: {
        globalCount: {
          type: 'integer',
          nullable: false
        },
        countAfterFiltering: {
          type: 'integer',
          nullable: false
        }
      }
    },
    data: {
      type: 'array',
      items: RamSchema
    }
  }
}
