import { FastifyInstance } from 'fastify';
import { FastifyNext, FastifyOptions } from './fastifyTypes';
import { PostCpuRequest, PutCpuRequest, DeleteCpuRequest, GetAllCpusRequest, GetOneCpuRequest, GetAllCpusResponse, CpuSchema, CreateCpuSchema, UpdateCpuSchema } from './cpu.schema';
import { GetMultipleQuery, GetOneQuery, CreateOneQuery, UpdateOneQuery, DeleteOneQuery } from '../../helpers/swagger.helper';
import { ICpuFilter } from '../../data/repositories/filters/cpu.filter';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { CpuService } = fastify.services;

  const getAllSchema = GetMultipleQuery(GetAllCpusResponse, ICpuFilter.schema);
  fastify.get('/', getAllSchema, async (request: GetAllCpusRequest, reply) => {
    console.log('id');
    const cpus = await CpuService.getAllCpus(request.query);
    reply.send(cpus);
  });

  const getOneSchema = GetOneQuery(CpuSchema);
  fastify.get('/:id', getOneSchema, async (request: GetOneCpuRequest, reply) => {
    const { id } = request.params;
    const cpu = await CpuService.getCpuById(id);
    reply.send(cpu);
  });

  const createOneSchema = CreateOneQuery(CreateCpuSchema, CpuSchema);
  fastify.post('/', createOneSchema, async (request: PostCpuRequest, reply) => {
    const cpu = await CpuService.createCpu(request.body);
    reply.send(cpu);
  });

  const updateOneSchema = UpdateOneQuery(UpdateCpuSchema, CpuSchema)
  fastify.put('/:id', updateOneSchema, async (request: PutCpuRequest, reply) => {
    const { id } = request.params;
    const newCpu = await CpuService.updateCpuById({ id, data: request.body });
    reply.send(newCpu);
  });

  const deleteOneSchema = DeleteOneQuery();
  fastify.delete('/:id', deleteOneSchema, async (request: DeleteCpuRequest, reply) => {
    const { id } = request.params;
    await CpuService.deleteCpuById({ id });
    reply.send({});
  });

  next();
}
