import { FastifyInstance } from 'fastify';
import { router as ramTypeRouter } from './ramType.router';
import { router as ramRouter } from './ram.router';

export default (fastify: FastifyInstance, opts, next): void => {
  fastify.register(ramTypeRouter, { prefix: '/ramTypes' });
  fastify.register(ramRouter, { prefix: '/rams' });
  next();
};
