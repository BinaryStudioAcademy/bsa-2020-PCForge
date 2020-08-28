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
  DetailedRamSchema,
} from './ram.schema';
import {
  getMultipleQuery,
  getOneQuery,
  createOneQuery,
  updateOneQuery,
  deleteOneQuery,
} from '../../helpers/swagger.helper';

import { IRamFilter } from '../../data/repositories/filters/ram.filter';
import { userRequestMiddleware } from '../middlewares/userRequest.middlewarre';
import { allowForAuthorized, allowForAdmin } from '../middlewares/allowFor.middleware';
import { renameQuery } from '../middlewares/rename.middleware';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { RamService } = fastify.services;
  const preHandler = userRequestMiddleware(fastify);
  fastify.addHook('preHandler', preHandler);

  const getAllSchema = getMultipleQuery(GetAllRamResponse, IRamFilter.schema);
  fastify.get('/', getAllSchema, async (request: GetAllRamsRequest, reply) => {
    allowForAuthorized(request);
    console.log(request.query);
    renameQuery(request, ['typeIds', 'typeId']);
    console.log(request.query);
    const rams = await RamService.getAllRams(request.query);
    reply.send(rams);
  });

  const getOneSchema = getOneQuery(DetailedRamSchema);
  fastify.get('/:id', getOneSchema, async (request: GetOneRamRequest, reply) => {
    allowForAuthorized(request);
    const { id } = request.params;
    const ram = await RamService.getRamById(id);
    reply.send(ram);
  });

  const createOneSchema = createOneQuery(CreateRamSchema, RamSchema);
  fastify.post('/', createOneSchema, async (request: PostRamRequest, reply) => {
    allowForAdmin(request);
    const ram = await RamService.createRam(request.body);
    reply.send(ram);
  });

  const updateOneSchema = updateOneQuery(UpdateRamSchema, RamSchema);
  fastify.put('/:id', updateOneSchema, async (request: PutRamRequest, reply) => {
    allowForAdmin(request);
    const { id } = request.params;
    const newRam = await RamService.updateRamById({ id, data: request.body });
    reply.send(newRam);
  });

  const deleteOneSchema = deleteOneQuery(RamSchema);
  fastify.delete('/:id', deleteOneSchema, async (request: DeleteRamRequest, reply) => {
    allowForAdmin(request);
    const { id } = request.params;
    const ram = await RamService.deleteRamById(id);
    reply.send(ram);
  });

  next();
}
