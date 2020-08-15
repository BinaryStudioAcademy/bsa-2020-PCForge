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
import { GetMultipleQuery, GetOneQuery, CreateOneQuery, UpdateOneQuery, DeleteOneQuery } from '../../helpers/swagger.helper';
import { IFilter } from '../../data/repositories/filters/base.filter';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { RamTypeService } = fastify.services;

  const getAllSchema = GetMultipleQuery(GetAllRamTypesResponse, IFilter.schema);
  fastify.get('/', getAllSchema, async (request: GetAllRamTypesRequest, reply) => {
    const ramTypes = await RamTypeService.getAllRamTypes(request.query);
    reply.send(ramTypes);
  });

  const getOneSchema = GetOneQuery(RamTypeSchema);
  fastify.get('/:id', getOneSchema, async (request: GetOneRamTypeRequest, reply) => {
    const { id } = request.params;
    const ramType = await RamTypeService.getRamTypeById(id);
    reply.send(ramType);
  });

  const createOneSchema = CreateOneQuery(CreateRamTypeSchema, RamTypeSchema);
  fastify.post('/', createOneSchema, async (request: PostRamTypeRequest, reply) => {
    const { name } = request.body;
    const ramType = await RamTypeService.createRamType({ name });
    reply.send(ramType);
  });

  const updateSchema = UpdateOneQuery(UpdateRamTypeSchema, RamTypeSchema);
  fastify.put('/:id', {}, async (request: PutRamTypeRequest, reply) => {
    const { id } = request.params;
    const { name } = request.body;
    const newRamType = await RamTypeService.updateRamById({ id, data: { name } });
    reply.send(newRamType);
  });

  const deleteSchema = DeleteOneQuery();
  fastify.delete('/:id', deleteSchema, async (request: DeleteRamTypeRequest, reply) => {
    const { id } = request.params;
    await RamTypeService.deleteRamTypeById(id);
    reply.send({});
  });

  next();
}
