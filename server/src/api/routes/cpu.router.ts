import { FastifyInstance } from 'fastify';
import { FastifyNext, FastifyOptions } from './fastifyTypes';
import { PostCpuRequest, PutCpuRequest, DeleteCpuRequest, GetAllCpusRequest, GetOneCpuRequest, GetAllCpusResponse, CpuSchema, CreateCpuSchema, UpdateCpuSchema } from './cpu.schema';
import { GetMultipleQuery, GetOneQuery, CreateOneQuery, UpdateOneQuery, DeleteOneQuery } from '../../helpers/swagger.helper';
import { ICpuFilter } from '../../data/repositories/filters/cpu.filter';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { CpuService } = fastify.services;

  const getAll = GetMultipleQuery(GetAllCpusResponse, ICpuFilter.schema);
  fastify.get('/', getAll, async (request: GetAllCpusRequest, reply) => {
    const cpus = await CpuService.getAllCpus(request.query);
    reply.send(cpus);
  });

  const getOne = GetOneQuery(CpuSchema);
  fastify.get('/:id', getOne, async (request: GetOneCpuRequest, reply) => {
    const { id } = request.params;
    const cpu = await CpuService.getCpuById(id);
    reply.send(cpu);
  });

  const createOne = CreateOneQuery(CreateCpuSchema, CpuSchema);
  fastify.post('/', createOne, async (request: PostCpuRequest, reply) => {
    const cpu = await CpuService.createCpu(request.body);
    reply.send(cpu);
  });

  const updateOne = UpdateOneQuery(UpdateCpuSchema, CpuSchema)
  fastify.put('/:id', updateOne, async (request: PutCpuRequest, reply) => {
    const { id } = request.params;
    const newCpu = await CpuService.updateCpuById({ id, data: request.body });
    reply.send(newCpu);
  });

  const deleteOne = DeleteOneQuery();
  fastify.delete('/:id', deleteOne, async (request: DeleteCpuRequest, reply) => {
    const { id } = request.params;
    await CpuService.deleteCpuById({ id });
    reply.send({});
  });

  next();
}
