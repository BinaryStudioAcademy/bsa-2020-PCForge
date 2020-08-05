import { FastifyInstance } from 'fastify';

interface IBody {
  name: string;
}

export default function router(fastify: FastifyInstance, opts, next): void {
  fastify.get('/ping', {}, async (request, reply) => {
    reply.send('pong');
  });
  fastify.get('/ramTypes', {}, async (request, reply) => {
    const ramTypes = await fastify.db.models.RamType.findAll();
    reply.send(ramTypes);
  });
  fastify.post<{ Body: IBody }>('/ramTypes', {}, async (request, reply) => {
    const { name } = request.body;
    const ramType = await fastify.db.models.RamType.create({ name });
    reply.send(ramType);
  });
  next();
}
