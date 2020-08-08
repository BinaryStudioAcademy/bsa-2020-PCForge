import { FastifyInstance } from 'fastify';
import { FastifyNext, FastifyOptions } from './fastifyTypes';
import { PostGpuRequest, GetGpuRequest, PutGpuRequest, DeleteGpuRequest } from './gpu.schema';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { GpuService } = fastify.services;

  fastify.get('/', {}, async (request, reply) => {
    const gpus = await GpuService.getAllGpus();
    reply.send(gpus);
  });

  fastify.get('/:id', {}, async (request: GetGpuRequest, reply) => {
    const { id } = request.params;
    const gpu = await GpuService.getGpuById(id);
    reply.send(gpu);
  });

  fastify.post('/', {}, async (request: PostGpuRequest, reply) => {
    const gpu = await GpuService.createGpu(request.body);
    reply.send(gpu);
  });

  fastify.put('/:id', {}, async (request: PutGpuRequest, reply) => {
    const { id } = request.params;
    const newGpu = await GpuService.updateGpuById({ id, data: request.body });
    reply.send(newGpu);
  });

  fastify.delete('/:id', {}, async (request: DeleteGpuRequest, reply) => {
    const { id } = request.params;
    await GpuService.deleteGpuById({ id });
    reply.send({});
  });

  next();
}
