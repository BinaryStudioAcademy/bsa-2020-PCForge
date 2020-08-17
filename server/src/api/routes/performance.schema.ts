import { FastifyRequest } from 'fastify';
import { SwaggerSchema } from '../../data/models/swaggerSchema';

export type GetOneSetupPerformanceRequest = FastifyRequest<{
  Params: { id: string };
  Querystring: { gameId: string };
}>;

export const SetupPerformanceSchema: SwaggerSchema = {
  type: 'object',
  properties: {},
};

export const GetOneSetupPerformanceResponse: SwaggerSchema = {
  type: 'object',
  properties: {
    SetupPerformanceSchema,
  },
};
