import { FastifyInstance } from 'fastify';
import { FastifyNext, FastifyOptions } from './fastifyTypes';
import { PostCpuRequest, PutCpuRequest, DeleteCpuRequest, GetAllCpusRequest, GetOneCpuRequest } from './cpu.schema';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { CpuService } = fastify.services;

  fastify.get('/', {}, async (request: GetAllCpusRequest, reply) => {
    const cpus = await CpuService.getAllCpus(request.query);
    reply.send(cpus);
  });

  fastify.get('/:id', {}, async (request: GetOneCpuRequest, reply) => {
    const { id } = request.params;
    const cpu = await CpuService.getCpuById(id);
    reply.send(cpu);
  });

  fastify.post('/', {}, async (request: PostCpuRequest, reply) => {
    const cpu = await CpuService.createCpu(request.body);
    reply.send(cpu);
  });

  fastify.put('/:id', {}, async (request: PutCpuRequest, reply) => {
    const { id } = request.params;
    const newCpu = await CpuService.updateCpuById({ id, data: request.body });
    reply.send(newCpu);
  });

  fastify.delete('/:id', {}, async (request: DeleteCpuRequest, reply) => {
    const { id } = request.params;
    await CpuService.deleteCpuById({ id });
    reply.send({});
  });

  next();
}
