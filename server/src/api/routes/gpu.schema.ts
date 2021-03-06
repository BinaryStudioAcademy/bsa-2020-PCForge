import { FastifyRequest } from 'fastify';
import { GpuCreationAttributes } from '../../data/models/gpu';
import { IGpuFilter } from '../../data/repositories/filters/gpu.filter';
import { SwaggerSchema } from '../../data/models/swaggerSchema';
import { UserAttributes } from '../../data/models/user';

export type GetAllGpusRequest = FastifyRequest<{
  Querystring: IGpuFilter;
}> & { user: UserAttributes };

export type GetOneGpuRequest = FastifyRequest<{
  Params: { id: string };
}> & { user: UserAttributes };

export type PostGpuRequest = FastifyRequest<{
  Body: GpuCreationAttributes;
}> & { user: UserAttributes };

export type PutGpuRequest = FastifyRequest<{
  Params: { id: string };
  Body: GpuCreationAttributes;
}> & { user: UserAttributes };

export type DeleteGpuRequest = FastifyRequest<{
  Params: { id: string };
}> & { user: UserAttributes };

export const GpuSchema: SwaggerSchema = {
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
      example: 'FirePro 3D V3700',
      nullable: false,
    },
    interface: {
      type: 'string',
      minLength: 1,
      example: 'PCIe 2.0 x16',
      nullable: false,
    },
    memorySize: {
      type: 'integer',
      example: 256,
      minimum: 0,
      nullable: false,
    },
    coreClocks: {
      type: 'integer',
      example: 800,
      minimum: 0,
      nullable: false,
    },
    opengl: {
      type: 'string',
      minLength: 1,
      example: '3',
      nullable: false,
    },
    tdp: {
      type: 'number',
      example: 16.2,
      minimum: 0,
      nullable: false,
    },
    performance: {
      type: 'integer',
      example: 160,
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

export const CreateGpuSchema: SwaggerSchema = {
  type: 'object',
  required: ['name', 'interface', 'memorySize', 'coreClocks', 'opengl', 'tdp', 'performance'],
  properties: {
    name: {
      type: 'string',
      minLength: 1,
      example: 'FirePro 3D V3700',
      nullable: false,
    },
    interface: {
      type: 'string',
      minLength: 1,
      example: 'PCIe 2.0 x16',
      nullable: false,
    },
    memorySize: {
      type: 'integer',
      example: 256,
      minimum: 0,
      nullable: false,
    },
    coreClocks: {
      type: 'integer',
      example: 800,
      minimum: 0,
      nullable: false,
    },
    opengl: {
      type: 'string',
      minLength: 1,
      example: '3',
      nullable: false,
    },
    tdp: {
      type: 'number',
      example: 16.2,
      minimum: 0,
      nullable: false,
    },
    performance: {
      type: 'integer',
      example: 160,
      minimum: 0,
      nullable: false,
    },
  },
};

export const UpdateGpuSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      minLength: 1,
      example: 'FirePro 3D V3700',
      nullable: true,
    },
    interface: {
      type: 'string',
      minLength: 1,
      example: 'PCIe 2.0 x16',
      nullable: true,
    },
    memorySize: {
      type: 'integer',
      example: 256,
      minimum: 0,
      nullable: true,
    },
    coreClocks: {
      type: 'integer',
      example: 800,
      minimum: 0,
      nullable: true,
    },
    opengl: {
      type: 'string',
      minLength: 1,
      example: '3',
      nullable: true,
    },
    tdp: {
      type: 'number',
      example: 16.2,
      minimum: 0,
      nullable: true,
    },
    performance: {
      type: 'integer',
      example: 160,
      minimum: 0,
      nullable: true,
    },
  },
};

export const GetAllGpusResponse: SwaggerSchema = {
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
      items: GpuSchema,
    },
  },
};
