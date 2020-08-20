import { FastifyInstance } from 'fastify';
import { FastifyDone, FastifyOptions } from './fastifyTypes';
import { GetOneSetupPerformanceRequest, GetOneSetupPerformanceResponse } from './performance.schema';
import { GetOneQuery } from '../../helpers/swagger.helper';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyDone): void {
  const { PerformanceService } = fastify.services;

  // const getOneSetupPerformanceResponse = GetOneQuery(GetOneSetupPerformanceResponse, [
  //   { gameId: { type: 'integer', nullable: false, minimum: 1 } },
  // ]);
  fastify.get('/setup/:id', {}, async (request: GetOneSetupPerformanceRequest, reply) => {
    const performance = await PerformanceService.getSetupPerformanceById(request.params.id, request.query.gameId);
    reply.send(performance);
  });

  next();
}
