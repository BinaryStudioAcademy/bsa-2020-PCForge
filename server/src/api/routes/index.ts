import { FastifyInstance } from 'fastify';
import { router as ramTypeRouter } from './ramType.router';
import { router as ramRouter } from './ram.router';
import { router as powerSupplyRouter } from './powerSupply.router';
import { router as socketRouter } from './socket.router';
import { router as motherboardRouter } from './motherboard.router';
import { router as gpuRouter } from './gpu.router';
import { router as cpuRouter } from './cpu.router';
import { router as userRouter } from './user.router';
import { FastifyNext, FastifyOptions } from './fastifyTypes';
// import auth from '../plugins/auth';
import { router as authRouter } from './auth.router';

export default (fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void => {
  fastify.register(ramTypeRouter, { prefix: '/ramTypes' });
  fastify.register(ramRouter, { prefix: '/rams' });
  fastify.register(powerSupplyRouter, { prefix: '/powerSupplies' });
  fastify.register(socketRouter, { prefix: '/sockets' });
  fastify.register(motherboardRouter, { prefix: '/motherboards' });
  fastify.register(gpuRouter, { prefix: '/gpus' });
  fastify.register(cpuRouter, { prefix: '/cpus' });
  fastify.register(userRouter, { prefix: '/users' });
  fastify.register(authRouter);

  next();
};
