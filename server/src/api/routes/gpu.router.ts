import { FastifyInstance } from 'fastify';
import { FastifyNext, FastifyOptions } from './fastifyTypes';
import {
  PostGpuRequest,
  GetOneGpuRequest,
  PutGpuRequest,
  DeleteGpuRequest,
  GetAllGpusRequest,
  GetAllGpusResponse,
  GpuSchema,
  CreateGpuSchema,
  UpdateGpuSchema,
} from './gpu.schema';
import {
  getMultipleQuery,
  getOneQuery,
  createOneQuery,
  updateOneQuery,
  deleteOneQuery,
} from '../../helpers/swagger.helper';
import { IGpuFilter } from '../../data/repositories/filters/gpu.filter';
import { userRequestMiddleware } from '../middlewares/userRequest.middlewarre';
import { allowForAuthorized, allowForAdmin } from '../middlewares/allowFor.middleware';
import { decodeName } from '../middlewares/decodeName.middleware';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { GpuService, HardwareService } = fastify.services;
  const preHandler = userRequestMiddleware(fastify);
  fastify.addHook('preHandler', preHandler);

  const getAllSchema = getMultipleQuery(GetAllGpusResponse, IGpuFilter.schema);
  fastify.get('/', getAllSchema, async (request: GetAllGpusRequest, reply) => {
    allowForAuthorized(request);
    decodeName(request);
    const gpus = await HardwareService.getTopGpus(request.query);
    reply.send(gpus);
  });

  const getOneSchema = getOneQuery(GpuSchema);
  fastify.get('/:id', getOneSchema, async (request: GetOneGpuRequest, reply) => {
    allowForAuthorized(request);
    const { id } = request.params;
    const gpu = await GpuService.getGpuById(id);
    reply.send(gpu);
  });

  const createOneSchema = createOneQuery(CreateGpuSchema, GpuSchema);
  fastify.post('/', createOneSchema, async (request: PostGpuRequest, reply) => {
    allowForAdmin(request);
    const gpu = await GpuService.createGpu(request.body);
    reply.send(gpu);
  });

  const updateOneSchema = updateOneQuery(UpdateGpuSchema, GpuSchema);
  fastify.put('/:id', updateOneSchema, async (request: PutGpuRequest, reply) => {
    allowForAdmin(request);
    const { id } = request.params;
    const newGpu = await GpuService.updateGpuById({ id, data: request.body });
    reply.send(newGpu);
  });

  const deleteOneSchema = deleteOneQuery(GpuSchema);
  fastify.delete('/:id', deleteOneSchema, async (request: DeleteGpuRequest, reply) => {
    allowForAdmin(request);
    const { id } = request.params;
    const gpu = await GpuService.deleteGpuById(id);
    reply.send(gpu);
  });

  next();
}
