import { FastifyRequest } from 'fastify';
import { RamTypeCreationAttributes } from '../../data/models/ramtype';
import { IFilter } from '../../data/repositories/filters/base.filter';
import { SwaggerSchema } from '../../data/models/swaggerSchema';

export type GetAllRamTypesRequest = FastifyRequest<{
  Querystring: IFilter;
}>;

export type GetOneRamTypeRequest = FastifyRequest<{
  Params: { id: string };
}>;

export type PostRamTypeRequest = FastifyRequest<{
  Body: RamTypeCreationAttributes;
}>;

export type PutRamTypeRequest = FastifyRequest<{
  Params: { id: string };
  Body: RamTypeCreationAttributes;
}>;

export type DeleteRamTypeRequest = FastifyRequest<{
  Params: { id: string };
}>;

export const RamTypeSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: false
    },
    name: {
      type: 'string',
      example: 'Unique ram type name',
      nullable: false,
    },
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

export const GetAllRamTypesResponse: SwaggerSchema = {
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
      items: RamTypeSchema
    }
  }
}

export const CreateRamTypeSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      example: 'Ram type name',
      nullable: false,
    },
  }
}

export const UpdateRamTypeSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      example: 'Unique ram type name',
      nullable: true,
    },
  }
}
