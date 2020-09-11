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
import { renameQuery } from '../middlewares/rename.middleware';
import { CpuMiddleware } from '../middlewares/cpu.middleware';
import { decodeName } from '../middlewares/decodeName.middleware';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { CpuService, HardwareService } = fastify.services;

  const cpuMiddleware = CpuMiddleware(fastify);
  const preHandler = userRequestMiddleware(fastify);
  fastify.addHook('preHandler', preHandler);

  const getAllSchema = getMultipleQuery(GetAllCpusResponse, ICpuFilter.schema);
  fastify.get('/', getAllSchema, async (request: GetAllCpusRequest, reply) => {
    allowForAuthorized(request);
    renameQuery(request, ['socketIds', 'socketId']);
    decodeName(request);
    const cpus = await CpuService.getAllCpus(request.query);
    //const cpus = await HardwareService.getTopCpus(request.query);
    reply.send(cpus);
  });

  const getOneSchema = getOneQuery(DetailedCpuSchema);
  fastify.get('/:id', getOneSchema, async (request: GetOneCpuRequest, reply) => {
    allowForAuthorized(request);
    const { id } = request.params;
    const cpu = await CpuService.getCpuById(id);
    reply.send(cpu);
  });

  const createOneSchema = createOneQuery(CreateCpuSchema, CpuSchema);
  fastify.post('/', createOneSchema, async (request: PostCpuRequest, reply) => {
    allowForAdmin(request);
    const cpu = await CpuService.createCpu(request.body, cpuMiddleware);
    reply.send(cpu);
  });

  const updateOneSchema = updateOneQuery(UpdateCpuSchema, CpuSchema);
  fastify.put('/:id', updateOneSchema, async (request: PutCpuRequest, reply) => {
    allowForAdmin(request);
    const { id } = request.params;
    const data = { id, data: request.body };
    const newCpu = await CpuService.updateCpuById(data, cpuMiddleware);
    reply.send(newCpu);
  });

  const deleteOneSchema = deleteOneQuery(CpuSchema);
  fastify.delete('/:id', deleteOneSchema, async (request: DeleteCpuRequest, reply) => {
    allowForAdmin(request);
    const { id } = request.params;
    const cpu = await CpuService.deleteCpuById(id);
    reply.send(cpu);
  });

  next();
}
