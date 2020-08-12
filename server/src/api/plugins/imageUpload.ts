import fp from 'fastify-plugin';
import fastifyMultipart from 'fastify-multipart';

export default fp((fastify, opts, next) => {
  fastify.register(fastifyMultipart);
  next();
});
