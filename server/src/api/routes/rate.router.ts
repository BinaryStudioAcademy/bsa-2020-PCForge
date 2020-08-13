import { FastifyInstance } from 'fastify';
import { FastifyNext, FastifyOptions } from './fastifyTypes';
import {
  PostRateRequest,
  PutRateRequest,
  DeleteRateRequest,
  GetAllRatesRequest,
  GetOneRateRequest,
} from './rate.schema';
import { RateMiddleware } from '../middlewares/rate.middleware';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { RateService } = fastify.services;

  const rateMiddleware = RateMiddleware(fastify);

  fastify.get('/', {}, async (request: GetAllRatesRequest, reply) => {
    const rates = await RateService.getAllRates(request.query);
    reply.send(rates);
  });

  fastify.get('/:id', {}, async (request: GetOneRateRequest, reply) => {
    const { id } = request.params;
    const rate = await RateService.getRateById(id);
    reply.send(rate);
  });

  fastify.post('/', {}, async (request: PostRateRequest, reply) => {
    const rate = await RateService.createRate(request.body, rateMiddleware);
    reply.send(rate);
  });

  fastify.put('/:id', {}, async (request: PutRateRequest, reply) => {
    const { id } = request.params;
    const newRate = await RateService.updateRateById({ id, data: request.body }, rateMiddleware);
    reply.send(newRate);
  });

  fastify.delete('/:id', {}, async (request: DeleteRateRequest, reply) => {
    const { id } = request.params;
    await RateService.deleteRateById(id);
    reply.send({});
  });

  next();
}
