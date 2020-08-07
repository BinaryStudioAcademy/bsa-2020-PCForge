import { FastifyInstance } from 'fastify';

export function router(fastify: FastifyInstance, opts, next): void {
  fastify.post('/auth', {}, async (request, reply) => {
    const { login, password } = request.body;
    if (!login || !password) {
      reply.status(400).send({ error: true, msg: 'Mandatory fields are missing' });
    }
    //SET DB level checks if any
    const token = fastify.jwt.sign({}, { expiresIn: 86400 });
    reply.send({ token });
  });

  next();
}
