import { FastifyInstance } from 'fastify';
import { PostRamTypeRequest, GetRamTypeRequest } from './ramType.schema';

export function router(fastify: FastifyInstance, opts, next): void {
  fastify.get('/', {}, async (request, reply) => {
    const ramTypes = await fastify.db.models.RamType.findAll();
    reply.send(ramTypes);
  });

  fastify.get('/:id', {}, async (request: GetRamTypeRequest, reply) => {
    const { id } = request.params;
    const ramType = await fastify.db.models.RamType.findByPk(id);
    reply.send(ramType);
  });

  fastify.post('/', {}, async (request: PostRamTypeRequest, reply) => {
    const { name } = request.body;
    const ramType = await fastify.db.models.RamType.create({ name });
    reply.send(ramType);
  });
  next();
}
