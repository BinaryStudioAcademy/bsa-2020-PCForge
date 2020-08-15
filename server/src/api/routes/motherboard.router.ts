import { FastifyInstance } from 'fastify';
import { FastifyNext, FastifyOptions } from './fastifyTypes';
import {
  PostMotherboardRequest,
  PutMotherboardRequest,
  DeleteMotherboardRequest,
  GetAllMotherboardsRequest,
  GetOneMotherboardRequest,
  GetAllMotherBoardResponse,
  MotherBoardSchema,
  CreateMotherBoardSchema,
  UpdateMotherBoardSchema,
} from './motherboard.schema';
import { GetMultipleQuery, GetOneQuery, CreateOneQuery, UpdateOneQuery, DeleteOneQuery } from '../../helpers/swagger.helper';
import { IMotherboardFilter } from '../../data/repositories/filters/motherboard.filter';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { MotherboardService } = fastify.services;

  const getAll = GetMultipleQuery(GetAllMotherBoardResponse, IMotherboardFilter.schema);
  fastify.get('/', getAll, async (request: GetAllMotherboardsRequest, reply) => {
    const motherboards = await MotherboardService.getAllMotherboards(request.query);
    reply.send(motherboards);
  });

  const getOne = GetOneQuery(MotherBoardSchema);
  fastify.get('/:id', getOne, async (request: GetOneMotherboardRequest, reply) => {
    const { id } = request.params;
    const motherboard = await MotherboardService.getMotherboardById(id);
    reply.send(motherboard);
  });

  const createOne = CreateOneQuery(CreateMotherBoardSchema, MotherBoardSchema);
  fastify.post('/', createOne, async (request: PostMotherboardRequest, reply) => {
    const motherboard = await MotherboardService.createMotherboard(request.body);
    reply.send(motherboard);
  });

  const updateOne = UpdateOneQuery(UpdateMotherBoardSchema, MotherBoardSchema);
  fastify.put('/:id', updateOne, async (request: PutMotherboardRequest, reply) => {
    const { id } = request.params;
    const newMotherboard = await MotherboardService.updateMotherboardById({ id, data: request.body });
    reply.send(newMotherboard);
  });

  const deleteOne = DeleteOneQuery();
  fastify.delete('/:id', deleteOne, async (request: DeleteMotherboardRequest, reply) => {
    const { id } = request.params;
    await MotherboardService.deleteMotherboardById(id);
    reply.send({});
  });

  next();
}
