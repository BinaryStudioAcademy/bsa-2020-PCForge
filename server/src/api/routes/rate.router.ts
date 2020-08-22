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
  GetRatesAverage,
} from './rate.schema';
import { RateMiddleware } from '../middlewares/rate.middleware';
import {
  GetMultipleQuery,
  GetOneQuery,
  CreateOneQuery,
  UpdateOneQuery,
  DeleteOneQuery,
} from '../../helpers/swagger.helper';
import { IRateFilter } from '../../data/repositories/filters/rate.filter';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { RateService } = fastify.services;

  const rateMiddleware = RateMiddleware(fastify);

  const getAllSchema = GetMultipleQuery(GetAllRates, IRateFilter.schema);
  fastify.get('/', getAllSchema, async (request: GetAllRatesRequest, reply) => {
    const rates = await RateService.getAllRates(request.query);
    reply.send(rates);
  });

  fastify.get('/average', GetRatesAverage, async (request: GetAllRatesRequest, reply) => {
    const average = await RateService.getRatesAverage(request.query);
    reply.send(average);
  });

  const getOneSchema = GetOneQuery(RateSchema);
  fastify.get('/:id', getOneSchema, async (request: GetOneRateRequest, reply) => {
    const { id } = request.params;
    const rate = await RateService.getRateById(id);
    reply.send(rate);
  });

  const createOneSchema = CreateOneQuery(CreateRateSchema, RateSchema);
  fastify.post('/', createOneSchema, async (request: PostRateRequest, reply) => {
    const rate = await RateService.createRate(request.body, rateMiddleware);
    reply.send(rate);
  });

  const updateOneSchema = UpdateOneQuery(UpdateRateSchema, RateSchema);
  fastify.put('/:id', updateOneSchema, async (request: PutRateRequest, reply) => {
    const { id } = request.params;
    const newRate = await RateService.updateRateById({ id, data: request.body }, rateMiddleware);
    reply.send(newRate);
  });

  const deleteOneSchema = DeleteOneQuery(RateSchema);
  fastify.delete('/:id', deleteOneSchema, async (request: DeleteRateRequest, reply) => {
    const { id } = request.params;
    const rate = await RateService.deleteRateById(id);
    reply.send(rate);
  });

  next();
}
