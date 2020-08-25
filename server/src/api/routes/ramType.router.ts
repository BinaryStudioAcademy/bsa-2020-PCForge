import { FastifyInstance } from 'fastify';
import { FastifyNext, FastifyOptions } from './fastifyTypes';
import {
  PostRamTypeRequest,
  GetOneRamTypeRequest,
  PutRamTypeRequest,
  DeleteRamTypeRequest,
  GetAllRamTypesRequest,
  GetAllRamTypesResponse,
  RamTypeSchema,
  CreateRamTypeSchema,
  UpdateRamTypeSchema,
} from './ramType.schema';
import { getMultipleQuery, getOneQuery, createOneQuery, updateOneQuery, deleteOneQuery } from '../../helpers/swagger.helper';
import { IFilter } from '../../data/repositories/filters/base.filter';
import { userRequestMiddleware } from '../middlewares/userRequest.middlewarre';
import { allowForAuthorized, allowForAdmin } from '../middlewares/allowFor.middleware';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { RamTypeService } = fastify.services;
  const preHandler = userRequestMiddleware(fastify);
  fastify.addHook('preHandler', preHandler);

  const getAllSchema = getMultipleQuery(GetAllRamTypesResponse, IFilter.schema);
  fastify.get('/', getAllSchema, async (request: GetAllRamTypesRequest, reply) => {
    allowForAuthorized(request);
    const ramTypes = await RamTypeService.getAllRamTypes(request.query);
    reply.send(ramTypes);
  });

  const getOneSchema = getOneQuery(RamTypeSchema);
  fastify.get('/:id', getOneSchema, async (request: GetOneRamTypeRequest, reply) => {
    allowForAuthorized(request);
    const { id } = request.params;
    const ramType = await RamTypeService.getRamTypeById(id);
    reply.send(ramType);
  });

  const createOneSchema = createOneQuery(CreateRamTypeSchema, RamTypeSchema);
  fastify.post('/', createOneSchema, async (request: PostRamTypeRequest, reply) => {
    allowForAdmin(request);
    const { name } = request.body;
    const ramType = await RamTypeService.createRamType({ name });
    reply.send(ramType);
  });

  const updateOneSchema = updateOneQuery(UpdateRamTypeSchema, RamTypeSchema);
  fastify.put('/:id', updateOneSchema, async (request: PutRamTypeRequest, reply) => {
    allowForAdmin(request);
    const { id } = request.params;
    const { name } = request.body;
    const newRamType = await RamTypeService.updateRamById({ id, data: { name } });
    reply.send(newRamType);
  });

  const deleteOneSchema = deleteOneQuery(RamTypeSchema);
  fastify.delete('/:id', deleteOneSchema, async (request: DeleteRamTypeRequest, reply) => {
    allowForAdmin(request);
    const { id } = request.params;
    const ramType = await RamTypeService.deleteRamTypeById(id);
    reply.send(ramType);
  });

  next();
}
