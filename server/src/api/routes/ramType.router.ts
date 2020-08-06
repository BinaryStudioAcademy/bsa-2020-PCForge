import { FastifyInstance } from 'fastify';
import { PostRamTypeRequest, GetRamTypeRequest } from './ramType.schema';
import { testMiddleware } from '../middlewares/test.middleware';

export function router(fastify: FastifyInstance, opts, next): void {
  const { RamTypeService } = fastify.services;

  fastify.get('/', {}, async (request, reply) => {
    const ramTypes = await RamTypeService.getAllRamTypes();
    reply.send(ramTypes);
  });

  /**
   * Add array of middlewares to preHandler.
   * We can also write out custom preHandler here. In this case we get access to fastify instance.
   */
  fastify.get('/:id', { preHandler: [testMiddleware] }, async (request: GetRamTypeRequest, reply) => {
    const { id } = request.params;
    const ramType = await RamTypeService.getRamTypeById(id);
    /**
     * Here we get custom request field.
     * Note: we add myId type to GetRamRequest for convenience.
     * However it would work without it (with ts warnings).
     */
    console.log(`Request myId: ${request.myId}`);
    reply.send(ramType);
  });

  fastify.post('/', {}, async (request: PostRamTypeRequest, reply) => {
    const { name } = request.body;
    const ramType = await RamTypeService.createRamType({ name });
    reply.send(ramType);
  });
  next();
}
