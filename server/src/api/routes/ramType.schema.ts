import { FastifyRequest } from 'fastify';
import { RamTypeCreationAttributes } from '../../data/models/ramtype';
import { IFilter } from '../../data/repositories/filters/base.filter';
import { SwaggerSchema } from '../../data/models/swaggerSchema';
import { UserAttributes } from '../../data/models/user';

export type GetAllRamTypesRequest = FastifyRequest<{
  Querystring: IFilter;
}> & { user: UserAttributes };

export type GetOneRamTypeRequest = FastifyRequest<{
  Params: { id: string };
}> & { user: UserAttributes };

export type PostRamTypeRequest = FastifyRequest<{
  Body: RamTypeCreationAttributes;
}> & { user: UserAttributes };

export type PutRamTypeRequest = FastifyRequest<{
  Params: { id: string };
  Body: RamTypeCreationAttributes;
}> & { user: UserAttributes };

export type DeleteRamTypeRequest = FastifyRequest<{
  Params: { id: string };
}> & { user: UserAttributes };

export const RamTypeSchema: SwaggerSchema = {
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
      example: 'Unique ram type name',
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

export const GetAllRamTypesResponse: SwaggerSchema = {
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
      items: RamTypeSchema,
    },
  },
};

export const CreateRamTypeSchema: SwaggerSchema = {
  type: 'object',
  required: ['name'],
  properties: {
    name: {
      type: 'string',
      minLength: 1,
      example: 'Ram type name',
      nullable: false,
    },
  },
};

export const UpdateRamTypeSchema: SwaggerSchema = {
  type: 'object',
  required: ['name'],
  properties: {
    name: {
      type: 'string',
      minLength: 1,
      example: 'Unique ram type name',
      nullable: true,
    },
  },
};
