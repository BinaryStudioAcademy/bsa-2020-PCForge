import { FastifyInstance } from 'fastify';
import { FastifyNext, FastifyOptions } from './fastifyTypes';
import {
  PostCpuRequest,
  PutCpuRequest,
  DeleteCpuRequest,
  GetAllCpusRequest,
  GetOneCpuRequest,
  GetAllCpusResponse,
  CpuSchema,
  CreateCpuSchema,
  UpdateCpuSchema,
  DetailedCpuSchema,
} from './cpu.schema';
import {
  getMultipleQuery,
  getOneQuery,
  createOneQuery,
  updateOneQuery,
  deleteOneQuery,
} from '../../helpers/swagger.helper';
import { ICpuFilter } from '../../data/repositories/filters/cpu.filter';
import { userRequestMiddleware } from '../middlewares/userRequest.middlewarre';
import { allowForAuthorized, allowForAdmin } from '../middlewares/allowFor.middleware';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { CpuService } = fastify.services;
  const preHandler = userRequestMiddleware(fastify);
  fastify.addHook('preHandler', preHandler);

  const getAllSchema = getMultipleQuery(GetAllCpusResponse, ICpuFilter.schema);
  fastify.get('/', getAllSchema, async (request: GetAllCpusRequest, reply) => {
    allowForAuthorized(request);
    const cpus = await CpuService.getAllCpus(request.query);
    reply.send(cpus);
  });

  const getOneSchema = getOneQuery(DetailedCpuSchema);
  fastify.get('/:id', getOneSchema, async (request: GetOneCpuRequest, reply) => {
    allowForAuthorized(request);
    const { id } = request.params;
    const cpu = await CpuService.getCpuById(id);
    reply.send(cpu);
  });

  const createOneSchema = createOneQuery(CreateCpuSchema, DetailedCpuSchema);
  fastify.post('/', createOneSchema, async (request: PostCpuRequest, reply) => {
    allowForAdmin(request);
    const cpu = await CpuService.createCpu(request.body);
    reply.send(cpu);
  });

  const updateOneSchema = updateOneQuery(UpdateCpuSchema, DetailedCpuSchema);
  fastify.put('/:id', updateOneSchema, async (request: PutCpuRequest, reply) => {
    allowForAdmin(request);
    const { id } = request.params;
    const newCpu = await CpuService.updateCpuById({ id, data: request.body });
    reply.send(newCpu);
  });

  const deleteOneSchema = deleteOneQuery(DetailedCpuSchema);
  fastify.delete('/:id', deleteOneSchema, async (request: DeleteCpuRequest, reply) => {
    allowForAdmin(request);
    const { id } = request.params;
    const cpu = await CpuService.deleteCpuById(id);
    reply.send(cpu);
  });

  next();
}
