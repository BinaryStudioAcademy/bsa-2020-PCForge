import { FastifyRequest } from 'fastify';
import { SwaggerSchema } from '../../data/models/swaggerSchema';
import { SetupSchema } from './setup.schema';

export type GetOneSetupPerformanceRequest = FastifyRequest<{
  Params: { id: string };
  Querystring: { gameId: string };
}>;

// [
//   {
//     type: 'array',
//     items: {
//       type: 'string',
//     },
//   },
//   {
//     type: 'object',
//     properties: {
//       low: {
//         type: 'number',
//         example: 1,
//         minimum: 1,
//       },
//       medium: {
//         type: 'number',
//         example: 1,
//         minimum: 1,
//       },
//       high: {
//         type: 'number',
//         example: 1,
//         minimum: 1,
//       },
//       ultra: {
//         type: 'number',
//         example: 1,
//         minimum: 1,
//       },
//     },
//   },
// ]

export const FpsAnalysisSchema: SwaggerSchema = {
  type: 'array',
  items: {
    // anyOf: {}
  },
};

export const SetupPerformanceSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    setup: SetupSchema,
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
    fpsAnalysis: {
      type: 'array',
      items: FpsAnalysisSchema,
    },
  },
};

export const GetOneSetupPerformanceResponse: SwaggerSchema = {
  type: 'object',
  properties: {
    SetupPerformanceSchema,
  },
};
