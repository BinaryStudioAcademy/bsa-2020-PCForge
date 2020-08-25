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
  GetMultipleQuery,
  GetOneQuery,
  CreateOneQuery,
  UpdateOneQuery,
  DeleteOneQuery,
} from '../../helpers/swagger.helper';
import { IHddFilter } from '../../data/repositories/filters/hdd.filter';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { HddService } = fastify.services;

  const getAllSchema = GetMultipleQuery(GetAllHddsResponse, IHddFilter.schema);
  fastify.get('/', getAllSchema, async (request: GetAllHddsRequest, reply) => {
    const hdds = await HddService.getAllHdds(request.query);
    reply.send(hdds);
  });

  const getOneSchema = GetOneQuery(HddSchema);
  fastify.get('/:id', getOneSchema, async (request: GetOneHddRequest, reply) => {
    const { id } = request.params;
    const hdd = await HddService.getHddById(id);
    reply.send(hdd);
  });

  const createOneSchema = CreateOneQuery(CreateHddSchema, HddSchema);
  fastify.post('/', createOneSchema, async (request: PostHddRequest, reply) => {
    const hdd = await HddService.createHdd(request.body);
    reply.send(hdd);
  });

  const updateOneSchema = UpdateOneQuery(UpdateHddSchema, HddSchema);
  fastify.put('/:id', updateOneSchema, async (request: PutHddRequest, reply) => {
    const { id } = request.params;
    const newHdd = await HddService.updateHddById({ id, data: request.body });
    reply.send(newHdd);
  });

  const deleteOneSchema = DeleteOneQuery();
  fastify.delete('/:id', deleteOneSchema, async (request: DeleteHddRequest, reply) => {
    const { id } = request.params;
    await HddService.deleteHddById({ id });
    reply.send({});
  });

  next();
}
