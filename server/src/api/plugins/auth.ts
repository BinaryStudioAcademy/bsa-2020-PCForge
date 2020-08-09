import fp from 'fastify-plugin';
import fastifyJWT from 'fastify-jwt';

export default fp((fastify, opts, next) => {
  fastify.register(fastifyJWT, {
    secret: process.env.JWT_SECRET,
  });

  fastify.decorate('authenticate', async (req, res) => {
    try {
      await req.jwtVerify();
    } catch (err) {
      res.send(err);
    }
  });

  next();
});
