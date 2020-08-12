import { FastifyInstance } from 'fastify';
import { FastifyNext, FastifyOptions } from './fastifyTypes';
import {
  PostRamTypeRequest,
  GetOneRamTypeRequest,
  PutRamTypeRequest,
  DeleteRamTypeRequest,
  GetAllRamTypesRequest,
} from './ramType.schema';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { RamTypeService } = fastify.services;

  fastify.get('/', {}, async (request: GetAllRamTypesRequest, reply) => {
    const ramTypes = await RamTypeService.getAllRamTypes(request.query);
    reply.send(ramTypes);
  });

  fastify.get('/:id', {}, async (request: GetOneRamTypeRequest, reply) => {
    const { id } = request.params;
    const ramType = await RamTypeService.getRamTypeById(id);
    reply.send(ramType);
  });

  fastify.post('/', {}, async (request: PostRamTypeRequest, reply) => {
    const { name } = request.body;
    const ramType = await RamTypeService.createRamType({ name });
    reply.send(ramType);
  });

  fastify.put('/:id', {}, async (request: PutRamTypeRequest, reply) => {
    const { id } = request.params;
    const { name } = request.body;
    const newRamType = await RamTypeService.updateRamById({ id, data: { name } });
    reply.send(newRamType);
  });

  fastify.delete('/:id', {}, async (request: DeleteRamTypeRequest, reply) => {
    const { id } = request.params;
    await RamTypeService.deleteRamTypeById(id);
    reply.send({});
  });

  next();
}
