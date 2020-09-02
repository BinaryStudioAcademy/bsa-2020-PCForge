import { FastifyRequest } from 'fastify';
import { GameCreationAttributes } from '../../data/models/game';
import { IGameFilter } from '../../data/repositories/filters/game.filter';
import { SwaggerSchema } from '../../data/models/swaggerSchema';
import { CpuSchema } from './cpu.schema';
import { GpuSchema } from './gpu.schema';
import { UserAttributes } from '../../data/models/user';

export type GetAllGamesRequest = FastifyRequest<{
  Params: { id: string };
  Querystring: IGameFilter;
}> & { user: UserAttributes };

export type GetOneGameRequest = FastifyRequest<{
  Params: { id: string };
}> & { user: UserAttributes };

export type PostGameRequest = FastifyRequest<{
  Body: GameCreationAttributes;
}> & { user: UserAttributes };

export type PutGameRequest = FastifyRequest<{
  Params: { id: string };
  Body: GameCreationAttributes;
}> & { user: UserAttributes };

export type DeleteGameRequest = FastifyRequest<{
  Params: { id: string };
}> & { user: UserAttributes };

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
      minLength: 1,
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
      minLength: 1,
      nullable: false,
      example: 'http://hosting-server.com/route',
    },
    description: {
      type: 'string',
      minLength: 1,
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
    minimalCpu: CpuSchema,
    recommendedCpu: CpuSchema,
    minimalGpu: GpuSchema,
    recommendedGpu: GpuSchema,
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

export const CreateGameSchema: SwaggerSchema = {
  type: 'object',
  required: [
    'name',
    'year',
    'image',
    'description',
    'minimalRamSize',
    'recommendedRamSize',
    'minimalCpuId',
    'recommendedCpuId',
    'minimalGpuId',
    'recommendedGpuId',
  ],
  properties: {
    name: {
      type: 'string',
      minLength: 1,
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
      minLength: 1,
      nullable: false,
      example: 'http://hosting-server.com/route',
    },
    description: {
      type: 'string',
      minLength: 1,
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
  },
};

export const updateGameSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      minLength: 1,
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
      minLength: 1,
      nullable: true,
      example: 'http://hosting-server.com/route',
    },
    description: {
      type: 'string',
      minLength: 1,
      nullable: true,
      example: 'Long game description goes here...',
    },
    minimalRamSize: {
      type: 'integer',
      nullable: true,
      example: 4,
      minimum: 1,
    },
    recommendedRamSize: {
      type: 'integer',
      nullable: true,
      example: 8,
      minimum: 1,
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
