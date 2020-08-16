import { FastifyRequest } from 'fastify';
import { GpuCreationAttributes } from '../../data/models/gpu';
import { IFilter } from '../../data/repositories/filters/base.filter';
import { SwaggerSchema } from '../../data/models/swaggerSchema';

export type GetAllGpusRequest = FastifyRequest<{
  Querystring: IFilter;
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
      nullable: false
    },
    name: {
      type: 'string',
      example: 'FirePro 3D V3700',
      nullable: false,
    },
    interface: {
      type: 'string',
      example: 'PCIe 2.0 x16',
      nullable: false,
    },
    memorySize: {
      type: 'integer',
      example: 256,
      nullable: false,
    },
    coreClocks: {
      type: 'integer',
      example: 800,
      nullable: false
    },
    opengl: {
      type: 'string',
      example: '3',
      nullable: false
    },
    tdp: {
      type: 'number',
      example: 16.2,
      nullable: false
    },
    perfomance: {
      type: 'integer',
      example: 160,
      nullable: false
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

export const CreateGpuSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      example: 'FirePro 3D V3700',
      nullable: false,
    },
    interface: {
      type: 'string',
      example: 'PCIe 2.0 x16',
      nullable: false,
    },
    memorySize: {
      type: 'integer',
      example: 256,
      nullable: false,
    },
    coreClocks: {
      type: 'integer',
      example: 800,
      nullable: false
    },
    opengl: {
      type: 'string',
      example: '3',
      nullable: false
    },
    tdp: {
      type: 'number',
      example: 16.2,
      nullable: false
    },
    perfomance: {
      type: 'integer',
      example: 160,
      nullable: false
    },
  }
}

export const UpdateGpuSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      example: 'FirePro 3D V3700',
      nullable: true,
    },
    interface: {
      type: 'string',
      example: 'PCIe 2.0 x16',
      nullable: true,
    },
    memorySize: {
      type: 'integer',
      example: 256,
      nullable: true,
    },
    coreClocks: {
      type: 'integer',
      example: 800,
      nullable: true
    },
    opengl: {
      type: 'string',
      example: '3',
      nullable: true
    },
    tdp: {
      type: 'number',
      example: 16.2,
      nullable: true
    },
    perfomance: {
      type: 'integer',
      example: 160,
      nullable: true
    },
  },
}

export const GetAllGpusResponse: SwaggerSchema = {
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
      items: GpuSchema
    }
  }
}

