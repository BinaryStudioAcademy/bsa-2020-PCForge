import { FastifyInstance } from 'fastify';
import { router as ramTypeRouter } from './ramType.router';
import { router as pingRouter } from './ping.router';
// import auth from '../plugins/auth';
import { router as authRouter } from './auth.router';

export default (fastify: FastifyInstance, opts, next): void => {
  fastify.register(pingRouter, { prefix: '/ping' });
  fastify.register(ramTypeRouter, { prefix: '/ramTypes' });
  fastify.register(authRouter);

  next();
};
