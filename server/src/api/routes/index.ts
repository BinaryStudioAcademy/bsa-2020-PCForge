import { FastifyInstance } from 'fastify';
import { router as ramTypeRouter } from './ramType.router';
import { router as ramRouter } from './ram.router';
import { router as powerSupplyRouter } from './powerSupply.router';

export default (fastify: FastifyInstance, opts, next): void => {
  fastify.register(ramTypeRouter, { prefix: '/ramTypes' });
  fastify.register(ramRouter, { prefix: '/rams' });
  fastify.register(powerSupplyRouter, { prefix: '/powerSupplies' });
  next();
};
