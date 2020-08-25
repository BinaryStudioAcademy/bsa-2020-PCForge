import { FastifyInstance } from 'fastify';
import { FastifyDone, FastifyOptions } from './fastifyTypes';
import {
  GetOneSetupPerformanceRequest,
  SetupPerformanceSchema,
  SetupPerformanceSchemaRequest,
} from './performance.schema';
import { getOneQuery } from '../../helpers/swagger.helper';
import { userRequestMiddleware } from '../middlewares/userRequest.middlewarre';
import { allowForAuthorized } from '../middlewares/allowFor.middleware';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyDone): void {
  const { PerformanceService } = fastify.services;
  const preHandler = userRequestMiddleware(fastify);
  fastify.addHook('preHandler', preHandler);

  const getOneSetupPerformance = getOneQuery(SetupPerformanceSchema, SetupPerformanceSchemaRequest);
  fastify.get('/', getOneSetupPerformance, async (request: GetOneSetupPerformanceRequest, reply) => {
    allowForAuthorized(request);
    const performance = await PerformanceService.getPerformanceByHardware(request.query);
    reply.send(performance);
  });

  next();
}
