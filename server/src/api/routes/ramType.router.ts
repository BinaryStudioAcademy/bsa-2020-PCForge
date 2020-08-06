import { FastifyInstance } from 'fastify';
import { PostRamTypeRequest, GetRamTypeRequest, PutRamTypeRequest, DeleteRamTypeRequest } from './ramType.schema';

export function router(fastify: FastifyInstance, opts, next): void {
  const { RamTypeService } = fastify.services;

  fastify.get('/', {}, async (request, reply) => {
    const ramTypes = await RamTypeService.getAllRamTypes();
    reply.send(ramTypes);
  });

  fastify.get('/:id', {}, async (request: GetRamTypeRequest, reply) => {
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
    await RamTypeService.deleteRamTypeById({ id });
    reply.send({});
  });

  next();
}
