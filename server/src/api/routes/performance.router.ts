import { FastifyInstance } from 'fastify';
import { FastifyDone, FastifyOptions } from './fastifyTypes';
import {
  GetOneSetupPerformanceRequest,
  SetupPerformanceSchema,
  SetupPerformanceSchemaRequest,
} from './performance.schema';
import { GetOneQuery } from '../../helpers/swagger.helper';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyDone): void {
  const { PerformanceService } = fastify.services;

  const getOneSetupPerformance = GetOneQuery(SetupPerformanceSchema, SetupPerformanceSchemaRequest);
  fastify.get('/setup/:id', getOneSetupPerformance, async (request: GetOneSetupPerformanceRequest, reply) => {
    const performance = await PerformanceService.getSetupPerformanceById(request.params.id, request.query.gameId);
    reply.send(performance);
  });

  next();
}
