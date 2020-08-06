import { FastifyInstance } from 'fastify';
import { router as ramTypeRouter } from './ramType.router';

export default (fastify: FastifyInstance, opts, next): void => {
  fastify.register(ramTypeRouter, { prefix: '/ramTypes' });
  next();
};
