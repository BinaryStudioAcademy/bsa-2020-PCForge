import { FastifyInstance } from 'fastify';
import { PostRamRequest, GetRamRequest, PutRamRequest, DeleteRamRequest } from './ram.schema';

export function router(fastify: FastifyInstance, opts, next): void {
  const { RamService } = fastify.services;

  fastify.get('/', {}, async (request, reply) => {
    const rams = await RamService.getAllRams();
    reply.send(rams);
  });

  fastify.get('/:id', {}, async (request: GetRamRequest, reply) => {
    const { id } = request.params;
    const ram = await RamService.getRamById(id);
    reply.send(ram);
  });

  fastify.post('/', {}, async (request: PostRamRequest, reply) => {
    const ram = await RamService.createRam(request.body);
    reply.send(ram);
  });

  fastify.put('/:id', {}, async (request: PutRamRequest, reply) => {
    const { id } = request.params;
    const newRam = await RamService.updateRamById({ id, data: request.body });
    reply.send(newRam);
  });

  fastify.delete('/:id', {}, async (request: DeleteRamRequest, reply) => {
    const { id } = request.params;
    await RamService.deleteRamById({ id });
    reply.send({});
  });

  next();
}
