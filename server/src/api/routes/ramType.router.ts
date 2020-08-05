import { FastifyInstance } from 'fastify';
import { PostRamTypeRequest, GetRamTypeRequest } from './ramType.schema';
import { testMiddleware } from '../middlewares/test.middleware';

export function router(fastify: FastifyInstance, opts, next): void {
  fastify.get('/', {}, async (request, reply) => {
    const ramTypes = await fastify.db.models.RamType.findAll();
    reply.send(ramTypes);
  });

  /**
   * Add array of middlewares to preHandler.
   * We can also write out custom preHandler here. In this case we get access to fastify instance.
   */
  fastify.get('/:id', { preHandler: [testMiddleware] }, async (request: GetRamTypeRequest, reply) => {
    const { id } = request.params;
    const ramType = await fastify.db.models.RamType.findByPk(id);
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
    const ramType = await fastify.db.models.RamType.create({ name });
    reply.send(ramType);
  });
  next();
}
