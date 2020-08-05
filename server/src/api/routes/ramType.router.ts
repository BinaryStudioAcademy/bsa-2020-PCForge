import { FastifyInstance } from 'fastify';

interface IBody {
  name: string;
}

export function router(fastify: FastifyInstance, opts, next): void {
  fastify.get('/', {}, async (request, reply) => {
    const ramTypes = await fastify.db.models.RamType.findAll();
    reply.send(ramTypes);
  });
  fastify.post<{ Body: IBody }>('/', {}, async (request, reply) => {
    const { name } = request.body;
    const ramType = await fastify.db.models.RamType.create({ name });
    reply.send(ramType);
  });
  next();
}
