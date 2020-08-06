import { FastifyInstance } from 'fastify';

export function router(fastify: FastifyInstance, opts, next): void {
  fastify.get('/', {}, async (request, reply) => {
    reply.send('pong');
  });
  next();
}
