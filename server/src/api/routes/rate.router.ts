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
  getMultipleQuery,
  getOneQuery,
  createOneQuery,
  updateOneQuery,
  deleteOneQuery,
} from '../../helpers/swagger.helper';
import { IRateFilter } from '../../data/repositories/filters/rate.filter';
import { userRequestMiddleware } from '../middlewares/userRequest.middlewarre';
import { allowForAuthorized, allowForVerified } from '../middlewares/allowFor.middleware';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { RateService } = fastify.services;

  const rateMiddleware = RateMiddleware(fastify);
  const preHandler = userRequestMiddleware(fastify);
  fastify.addHook('preHandler', preHandler);

  const getAllSchema = getMultipleQuery(GetAllRates, IRateFilter.schema);
  fastify.get('/', getAllSchema, async (request: GetAllRatesRequest, reply) => {
    allowForAuthorized(request);
    const rates = await RateService.getAllRates(request.query);
    reply.send(rates);
  });

  fastify.get('/average', GetRatesAverage, async (request: GetAllRatesRequest, reply) => {
    allowForAuthorized(request);
    const average = await RateService.getRatesAverage(request.query);
    reply.send(average);
  });

  const getOneSchema = getOneQuery(RateSchema);
  fastify.get('/:id', getOneSchema, async (request: GetOneRateRequest, reply) => {
    allowForAuthorized(request);
    const { id } = request.params;
    const rate = await RateService.getRateById(id);
    reply.send(rate);
  });

  const createOneSchema = createOneQuery(CreateRateSchema, RateSchema);
  fastify.post('/', createOneSchema, async (request: PostRateRequest, reply) => {
    allowForVerified(request);
    request.body.userId = request.user.id;
    const rate = await RateService.createRate(request.body, rateMiddleware);
    reply.send(rate);
  });

  const updateOneSchema = updateOneQuery(UpdateRateSchema, RateSchema);
  fastify.put('/:id', updateOneSchema, async (request: PutRateRequest, reply) => {
    allowForVerified(request);
    const { id } = request.params;
    request.body.userId = request.user.id;
    const newRate = await RateService.updateRateById({ id, data: request.body }, rateMiddleware, request.user);
    reply.send(newRate);
  });

  const deleteOneSchema = deleteOneQuery(RateSchema);
  fastify.delete('/:id', deleteOneSchema, async (request: DeleteRateRequest, reply) => {
    allowForVerified(request);
    const { id } = request.params;
    const rate = await RateService.deleteRateById(id, request.user);
    reply.send(rate);
  });

  next();
}
