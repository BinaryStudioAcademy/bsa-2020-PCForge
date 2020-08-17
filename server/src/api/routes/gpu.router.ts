import { FastifyInstance } from 'fastify';
import { FastifyNext, FastifyOptions } from './fastifyTypes';
import { PostGpuRequest, GetOneGpuRequest, PutGpuRequest, DeleteGpuRequest, GetAllGpusRequest, GetAllGpusResponse, GpuSchema, CreateGpuSchema, UpdateGpuSchema } from './gpu.schema';
import { GetMultipleQuery, GetOneQuery, CreateOneQuery, UpdateOneQuery, DeleteOneQuery } from '../../helpers/swagger.helper';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { GpuService } = fastify.services;

  const getAllSchema = GetMultipleQuery(GetAllGpusResponse);
  fastify.get('/', getAllSchema, async (request: GetAllGpusRequest, reply) => {
    const gpus = await GpuService.getAllGpus(request.query);
    reply.send(gpus);
  });

  const getOneSchema = GetOneQuery(GpuSchema);
  fastify.get('/:id', getOneSchema, async (request: GetOneGpuRequest, reply) => {
    const { id } = request.params;
    const gpu = await GpuService.getGpuById(id);
    reply.send(gpu);
  });

  const createOneSchema = CreateOneQuery(CreateGpuSchema, GpuSchema);
  fastify.post('/', createOneSchema, async (request: PostGpuRequest, reply) => {
    const gpu = await GpuService.createGpu(request.body);
    reply.send(gpu);
  });

  const updateOneSchema = UpdateOneQuery(UpdateGpuSchema, GpuSchema);
  fastify.put('/:id', updateOneSchema, async (request: PutGpuRequest, reply) => {
    const { id } = request.params;
    const newGpu = await GpuService.updateGpuById({ id, data: request.body });
    reply.send(newGpu);
  });

  const deleteOneSchema = DeleteOneQuery();
  fastify.delete('/:id', deleteOneSchema, async (request: DeleteGpuRequest, reply) => {
    const { id } = request.params;
    await GpuService.deleteGpuById({ id });
    reply.send({});
  });

  next();
}
