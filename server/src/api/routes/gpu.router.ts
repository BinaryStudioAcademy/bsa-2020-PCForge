import { FastifyInstance } from 'fastify';
import { FastifyNext, FastifyOptions } from './fastifyTypes';
import { PostGpuRequest, GetOneGpuRequest, PutGpuRequest, DeleteGpuRequest, GetAllGpusRequest, GetAllGpusResponse, GpuSchema, CreateGpuSchema, UpdateGpuSchema } from './gpu.schema';
import { GetMultipleQuery, GetOneQuery, CreateOneQuery, UpdateOneQuery, DeleteOneQuery } from '../../helpers/swagger.helper';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { GpuService } = fastify.services;

  const getAll = GetMultipleQuery(GetAllGpusResponse);
  fastify.get('/', getAll, async (request: GetAllGpusRequest, reply) => {
    const gpus = await GpuService.getAllGpus(request.query);
    reply.send(gpus);
  });

  const getOne = GetOneQuery(GpuSchema);
  fastify.get('/:id', getOne, async (request: GetOneGpuRequest, reply) => {
    const { id } = request.params;
    const gpu = await GpuService.getGpuById(id);
    reply.send(gpu);
  });

  const createOne = CreateOneQuery(CreateGpuSchema, GpuSchema);
  fastify.post('/', createOne, async (request: PostGpuRequest, reply) => {
    const gpu = await GpuService.createGpu(request.body);
    reply.send(gpu);
  });

  const updateOne = UpdateOneQuery(UpdateGpuSchema, GpuSchema);
  fastify.put('/:id', updateOne, async (request: PutGpuRequest, reply) => {
    const { id } = request.params;
    const newGpu = await GpuService.updateGpuById({ id, data: request.body });
    reply.send(newGpu);
  });

  const deleteOne = DeleteOneQuery();
  fastify.delete('/:id', deleteOne, async (request: DeleteGpuRequest, reply) => {
    const { id } = request.params;
    await GpuService.deleteGpuById({ id });
    reply.send({});
  });

  next();
}
