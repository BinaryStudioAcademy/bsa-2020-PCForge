import { FastifyInstance } from 'fastify';
import { FastifyNext, FastifyOptions } from './fastifyTypes';
import {
  PostRateRequest,
  PutRateRequest,
  DeleteRateRequest,
  GetAllRatesRequest,
  GetOneRateRequest,
  GetAllRates,
  RateSchema,
  CreateRateSchema,
  UpdateRateSchema,
} from './rate.schema';
import { RateMiddleware } from '../middlewares/rate.middleware';
import { GetMultipleQuery, GetOneQuery, CreateOneQuery, UpdateOneQuery, DeleteOneQuery } from '../../helpers/swagger.helper';
import { IRateFilter } from '../../data/repositories/filters/rate.filter';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { RateService } = fastify.services;

  const rateMiddleware = RateMiddleware(fastify);

  const swaggerGetAll = GetMultipleQuery(GetAllRates, IRateFilter.schema);
  fastify.get('/', swaggerGetAll, async (request: GetAllRatesRequest, reply) => {
    const rates = await RateService.getAllRates(request.query);
    reply.send(rates);
  });

  const swaggerGetOne = GetOneQuery(RateSchema);
  fastify.get('/:id', swaggerGetOne, async (request: GetOneRateRequest, reply) => {
    const { id } = request.params;
    const rate = await RateService.getRateById(id);
    reply.send(rate);
  });

  const swaggerCreate = CreateOneQuery(CreateRateSchema, RateSchema);
  fastify.post('/', swaggerCreate, async (request: PostRateRequest, reply) => {
    const rate = await RateService.createRate(request.body, rateMiddleware);
    reply.send(rate);
  });

  const swaggerUpdate = UpdateOneQuery(UpdateRateSchema, RateSchema);
  fastify.put('/:id', swaggerUpdate, async (request: PutRateRequest, reply) => {
    const { id } = request.params;
    const newRate = await RateService.updateRateById({ id, data: request.body }, rateMiddleware);
    reply.send(newRate);
  });

  const swaggerDelete = DeleteOneQuery();
  fastify.delete('/:id', swaggerDelete, async (request: DeleteRateRequest, reply) => {
    const { id } = request.params;
    await RateService.deleteRateById(id);
    reply.send({});
  });

  next();
}
