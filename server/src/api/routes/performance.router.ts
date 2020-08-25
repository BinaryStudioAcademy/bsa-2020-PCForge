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
  fastify.get('/', getOneSetupPerformance, async (request: GetOneSetupPerformanceRequest, reply) => {
    const performance = await PerformanceService.getPerformanceByHardware(request.query);
    reply.send(performance);
  });

  next();
}
