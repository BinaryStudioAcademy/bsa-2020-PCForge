import { FastifyRequest } from 'fastify';
import { GpuCreationAttributes } from '../../data/models/gpu';
import { IGpuFilter } from '../../data/repositories/filters/gpu.filter';
import { SwaggerSchema } from '../../data/models/swaggerSchema';

export type GetAllGpusRequest = FastifyRequest<{
  Querystring: IGpuFilter;
}>;

export type GetOneGpuRequest = FastifyRequest<{
  Params: { id: string };
}>;

export type PostGpuRequest = FastifyRequest<{
  Body: GpuCreationAttributes;
}>;

export type PutGpuRequest = FastifyRequest<{
  Params: { id: string };
  Body: GpuCreationAttributes;
}>;

export type DeleteGpuRequest = FastifyRequest<{
  Params: { id: string };
}>;

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
      example: 'FirePro 3D V3700',
      nullable: false,
      minLength: 1,
    },
    interface: {
      type: 'string',
      example: 'PCIe 2.0 x16',
      nullable: false,
      minLength: 1,
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
      example: '3',
      nullable: false,
      minLength: 1,
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

export const CreateGpuSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      example: 'FirePro 3D V3700',
      nullable: false,
      minLength: 1,
    },
    interface: {
      type: 'string',
      example: 'PCIe 2.0 x16',
      nullable: false,
      minLength: 1,
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
      example: '3',
      nullable: false,
      minLength: 1,
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
      example: 'FirePro 3D V3700',
      nullable: true,
      minLength: 1,
    },
    interface: {
      type: 'string',
      example: 'PCIe 2.0 x16',
      nullable: true,
      minLength: 1,
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
      example: '3',
      nullable: true,
      minLength: 1,
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
