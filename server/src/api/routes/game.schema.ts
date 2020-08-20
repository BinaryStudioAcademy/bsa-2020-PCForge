import { FastifyRequest } from 'fastify';
import { GameCreationAttributes } from '../../data/models/game';
import { IGameFilter } from '../../data/repositories/filters/game.filter';
import { SwaggerSchema } from '../../data/models/swaggerSchema';
import { CpuSchema } from './cpu.schema';
import { GpuSchema } from './gpu.schema';

export type GetAllGamesRequest = FastifyRequest<{
  Params: { id: string };
  Querystring: IGameFilter;
}>;

export type GetOneGameRequest = FastifyRequest<{
  Params: { id: string };
}>;

export type PostGameRequest = FastifyRequest<{
  Body: GameCreationAttributes;
}>;

export type PutGameRequest = FastifyRequest<{
  Params: { id: string };
  Body: GameCreationAttributes;
}>;

export type DeleteGameRequest = FastifyRequest<{
  Params: { id: string };
}>;

export const GameSchema: SwaggerSchema = {
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
      example: 'Minecraft',
      nullable: false,
    },
    year: {
      type: 'integer',
      nullable: false,
      example: 2020,
      maximum: new Date().getFullYear(),
      minimum: 1920,
    },
    image: {
      type: 'string',
      nullable: false,
      example: 'http://hosting-server.com/route',
    },
    description: {
      type: 'string',
      nullable: false,
      example: 'Long game description goes here...',
    },
    minimalRamSize: {
      type: 'integer',
      nullable: false,
      example: 4,
      minimum: 1,
    },
    recommendedRamSize: {
      type: 'integer',
      nullable: false,
      example: 8,
      minimum: 1,
    },
    minimalCpuId: {
      type: 'integer',
      nullable: false,
      example: 1,
      minimum: 1,
    },
    recommendedCpuId: {
      type: 'integer',
      nullable: false,
      example: 1,
      minimum: 1,
    },
    minimalGpuId: {
      type: 'integer',
      nullable: false,
      example: 1,
      minimum: 1,
    },
    recommendedGpuId: {
      type: 'integer',
      nullable: false,
      example: 1,
      minimum: 1,
    },
    minimalCpu: {
      type: 'object',
      properties: {
        ...CpuSchema.properties,
        socket: {
          ...CpuSchema.properties.socket,
          nullable: true,
          example: null,
        },
      },
    },
    recommendedCpu: {
      type: 'object',
      properties: {
        ...CpuSchema.properties,
        socket: {
          ...CpuSchema.properties.socket,
          nullable: true,
          example: null,
        },
      },
    },
    minimalGpu: GpuSchema,
    recommendedGpu: GpuSchema,
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

export const CreateGameSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      example: 'FirePro 3D V3700',
      nullable: false,
    },
    year: {
      type: 'integer',
      nullable: false,
      example: 2020,
      maximum: new Date().getFullYear(),
      minimum: 1920,
    },
    image: {
      type: 'string',
      nullable: false,
      example: 'http://hosting-server.com/route',
    },
    description: {
      type: 'string',
      nullable: false,
      example: 'Long game description goes here...',
    },
    minimalRamSize: {
      type: 'integer',
      nullable: false,
      example: 4,
      minimum: 0,
    },
    recommendedRamSize: {
      type: 'integer',
      nullable: false,
      example: 8,
      minimum: 0,
    },
    minimalCpuId: {
      type: 'integer',
      nullable: false,
      example: 1,
      minimum: 1,
    },
    recommendedCpuId: {
      type: 'integer',
      nullable: false,
      example: 1,
      minimum: 1,
    },
    minimalGpuId: {
      type: 'integer',
      nullable: false,
      example: 1,
      minimum: 1,
    },
    recommendedGpuId: {
      type: 'integer',
      nullable: false,
      example: 1,
      minimum: 1,
    },
  },
};

export const updateGameSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      example: 'FirePro 3D V3700',
      nullable: true,
    },
    year: {
      type: 'integer',
      nullable: true,
      example: 2020,
      maximum: new Date().getFullYear(),
      minimum: 1920,
    },
    image: {
      type: 'string',
      nullable: true,
      example: 'http://hosting-server.com/route',
    },
    description: {
      type: 'string',
      nullable: true,
      example: 'Long game description goes here...',
    },
    minimalRamSize: {
      type: 'integer',
      nullable: true,
      example: 4,
      minimum: 0,
    },
    recommendedRamSize: {
      type: 'integer',
      nullable: true,
      example: 8,
      minimum: 0,
    },
    minimalCpuId: {
      type: 'integer',
      nullable: true,
      example: 1,
      minimum: 1,
    },
    recommendedCpuId: {
      type: 'integer',
      nullable: true,
      example: 1,
      minimum: 1,
    },
    minimalGpuId: {
      type: 'integer',
      nullable: true,
      example: 1,
      minimum: 1,
    },
    recommendedGpuId: {
      type: 'integer',
      nullable: true,
      example: 1,
      minimum: 1,
    },
  },
};

export const GetAllGamesResponse: SwaggerSchema = {
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
      items: GameSchema,
    },
  },
};
