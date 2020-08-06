import { FastifyInstance } from 'fastify';
import { router as ramTypeRouter } from './ramType.router';
import { router as pingRouter } from './ping.router';

export default (fastify: FastifyInstance, opts, next): void => {
  fastify.register(pingRouter, { prefix: '/ping' });
  fastify.register(ramTypeRouter, { prefix: '/ramTypes' });
  next();
};