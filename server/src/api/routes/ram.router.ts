import { FastifyInstance } from 'fastify';
import { FastifyNext, FastifyOptions } from './fastifyTypes';
import { PostRamRequest, GetOneRamRequest, PutRamRequest, DeleteRamRequest, GetAllRamsRequest, GetAllRamResponse, RamSchema, CreateRamSchema, UpdateRamSchema } from './ram.schema';
import { GetMultipleQuery, GetOneQuery, CreateOneQuery, UpdateOneQuery, DeleteOneQuery } from '../../helpers/swagger.helper';
import { IRamFilter } from '../../data/repositories/filters/ram.filter';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { RamService } = fastify.services;

  const getAll = GetMultipleQuery(GetAllRamResponse, IRamFilter.schema)
  fastify.get('/', getAll, async (request: GetAllRamsRequest, reply) => {
    const rams = await RamService.getAllRams(request.query);
    reply.send(rams);
  });

  const getOne = GetOneQuery(RamSchema);
  fastify.get('/:id', getOne, async (request: GetOneRamRequest, reply) => {
    const { id } = request.params;
    const ram = await RamService.getRamById(id);
    reply.send(ram);
  });

  const createOne = CreateOneQuery(CreateRamSchema, RamSchema);
  fastify.post('/', createOne, async (request: PostRamRequest, reply) => {
    const ram = await RamService.createRam(request.body);
    reply.send(ram);
  });

  const updateOne = UpdateOneQuery(UpdateRamSchema, RamSchema);
  fastify.put('/:id', updateOne, async (request: PutRamRequest, reply) => {
    const { id } = request.params;
    const newRam = await RamService.updateRamById({ id, data: request.body });
    reply.send(newRam);
  });

  const deleteOne = DeleteOneQuery();
  fastify.delete('/:id', deleteOne, async (request: DeleteRamRequest, reply) => {
    const { id } = request.params;
    await RamService.deleteRamById({ id });
    reply.send({});
  });

  next();
}
