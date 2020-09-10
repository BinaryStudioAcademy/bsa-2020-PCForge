import { FastifyInstance } from 'fastify';
import { FastifyNext, FastifyOptions } from './fastifyTypes';
import {
  PostHddRequest,
  GetOneHddRequest,
  PutHddRequest,
  DeleteHddRequest,
  GetAllHddsRequest,
  GetAllHddsResponse,
  HddSchema,
  CreateHddSchema,
  UpdateHddSchema,
} from './hdd.schema';
import {
  getMultipleQuery,
  getOneQuery,
  createOneQuery,
  updateOneQuery,
  deleteOneQuery,
} from '../../helpers/swagger.helper';
import { IHddFilter } from '../../data/repositories/filters/hdd.filter';
import { userRequestMiddleware } from '../middlewares/userRequest.middlewarre';
import { allowForAdmin, allowForAuthorized } from '../middlewares/allowFor.middleware';
import { decodeName } from '../middlewares/decodeName.middleware';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { HddService, HardwareService } = fastify.services;

  const preHandler = userRequestMiddleware(fastify);
  fastify.addHook('preHandler', preHandler);

  const getAllSchema = getMultipleQuery(GetAllHddsResponse, IHddFilter.schema);
  fastify.get('/', getAllSchema, async (request: GetAllHddsRequest, reply) => {
    allowForAuthorized(request);
    decodeName(request);
    const hdds = await HardwareService.getTopHdds(request.query);
    reply.send(hdds);
  });

  const getOneSchema = getOneQuery(HddSchema);
  fastify.get('/:id', getOneSchema, async (request: GetOneHddRequest, reply) => {
    allowForAuthorized(request);
    const { id } = request.params;
    const hdd = await HddService.getHddById(id);
    reply.send(hdd);
  });

  const createOneSchema = createOneQuery(CreateHddSchema, HddSchema);
  fastify.post('/', createOneSchema, async (request: PostHddRequest, reply) => {
    allowForAdmin(request);
    const hdd = await HddService.createHdd(request.body);
    reply.send(hdd);
  });

  const updateOneSchema = updateOneQuery(UpdateHddSchema, HddSchema);
  fastify.put('/:id', updateOneSchema, async (request: PutHddRequest, reply) => {
    allowForAdmin(request);
    const { id } = request.params;
    const newHdd = await HddService.updateHddById({ id, data: request.body });
    reply.send(newHdd);
  });

  const deleteOneSchema = deleteOneQuery(HddSchema);
  fastify.delete('/:id', deleteOneSchema, async (request: DeleteHddRequest, reply) => {
    allowForAdmin(request);
    const { id } = request.params;
    await HddService.deleteHddById({ id });
    reply.send({});
  });

  next();
}
