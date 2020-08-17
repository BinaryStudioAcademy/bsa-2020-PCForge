import { FastifyInstance } from 'fastify';
import { FastifyNext, FastifyOptions } from './fastifyTypes';
import {
  PostRamRequest,
  GetOneRamRequest,
  PutRamRequest,
  DeleteRamRequest,
  GetAllRamsRequest,
  GetAllRamResponse,
  RamSchema,
  CreateRamSchema,
  UpdateRamSchema,
} from './ram.schema';
import {
  GetMultipleQuery,
  GetOneQuery,
  CreateOneQuery,
  UpdateOneQuery,
  DeleteOneQuery,
} from '../../helpers/swagger.helper';
import { IRamFilter } from '../../data/repositories/filters/ram.filter';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { RamService } = fastify.services;

  const getAllSchema = GetMultipleQuery(GetAllRamResponse, IRamFilter.schema);
  fastify.get('/', getAllSchema, async (request: GetAllRamsRequest, reply) => {
    const rams = await RamService.getAllRams(request.query);
    reply.send(rams);
  });

  const getOneSchema = GetOneQuery(RamSchema);
  fastify.get('/:id', getOneSchema, async (request: GetOneRamRequest, reply) => {
    const { id } = request.params;
    const ram = await RamService.getRamById(id);
    reply.send(ram);
  });

  const createOneSchema = CreateOneQuery(CreateRamSchema, RamSchema);
  fastify.post('/', createOneSchema, async (request: PostRamRequest, reply) => {
    const ram = await RamService.createRam(request.body);
    reply.send(ram);
  });

  const updateOneSchema = UpdateOneQuery(UpdateRamSchema, RamSchema);
  fastify.put('/:id', updateOneSchema, async (request: PutRamRequest, reply) => {
    const { id } = request.params;
    const newRam = await RamService.updateRamById({ id, data: request.body });
    reply.send(newRam);
  });

  const deleteOneSchema = DeleteOneQuery();
  fastify.delete('/:id', deleteOneSchema, async (request: DeleteRamRequest, reply) => {
    const { id } = request.params;
    await RamService.deleteRamById({ id });
    reply.send({});
  });

  next();
}
