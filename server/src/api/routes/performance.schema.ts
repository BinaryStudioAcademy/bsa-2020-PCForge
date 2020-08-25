import { FastifyRequest } from 'fastify';
import { SwaggerSchema } from '../../data/models/swaggerSchema';
import { UserAttributes } from '../../data/models/user';

export type GetOneSetupPerformanceRequest = FastifyRequest<{
  Params: { id: string };
  Querystring: {
    gameId: string;
    cpuId: string;
    gpuId: string;
    ramSize: string;
  };
}> & { user: UserAttributes };

export const SetupPerformanceSchemaRequest: SwaggerSchema = {
  type: 'object',
  properties: {
    gameId: {
      type: 'integer',
      minimum: 0,
    },
    cpuId: {
      type: 'integer',
      minimum: 0,
    },
    gpuId: {
      type: 'integer',
      minimum: 0,
    },
    ramSize: {
      type: 'integer',
      minimum: 0,
    },
  },
};

export const SetupPerformanceSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    overall: {
      type: 'object',
      properties: {
        cpu: {
          type: 'number',
          example: 5.5,
          minimum: 0,
          nullable: false,
        },
        gpu: {
          type: 'number',
          example: 5.5,
          minimum: 0,
          nullable: false,
        },
        ram: {
          type: 'number',
          example: 5.5,
          minimum: 0,
          nullable: false,
        },
      },
    },
    report: {
      type: 'object',
      properties: {
        minimal: {
          type: 'object',
          properties: {
            cpu: {
              type: 'number',
              example: 5.5,
              minimum: 0,
              nullable: false,
            },
            gpu: {
              type: 'number',
              example: 5.5,
              minimum: 0,
              nullable: false,
            },
            ram: {
              type: 'number',
              example: 5.5,
              minimum: 0,
              nullable: false,
            },
          },
        },
        recommended: {
          type: 'object',
          properties: {
            cpu: {
              type: 'number',
              example: 5.5,
              minimum: 0,
              nullable: false,
            },
            gpu: {
              type: 'number',
              example: 5.5,
              minimum: 0,
              nullable: false,
            },
            ram: {
              type: 'number',
              example: 5.5,
              minimum: 0,
              nullable: false,
            },
          },
        },
      },
    },
    fpsAnalysis: {
      type: 'array',
    },
  },
};

export const GetOneSetupPerformanceResponse: SwaggerSchema = {
  type: 'object',
  properties: {
    SetupPerformanceSchema,
  },
};
