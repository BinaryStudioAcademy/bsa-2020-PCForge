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
  DetailedMotherBoardSchema,
} from './motherboard.schema';
import {
  GetMultipleQuery,
  GetOneQuery,
  CreateOneQuery,
  UpdateOneQuery,
  DeleteOneQuery,
} from '../../helpers/swagger.helper';
import { IMotherboardFilter } from '../../data/repositories/filters/motherboard.filter';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { MotherboardService } = fastify.services;

  const getAllSchema = GetMultipleQuery(GetAllMotherBoardResponse, IMotherboardFilter.schema);
  fastify.get('/', getAllSchema, async (request: GetAllMotherboardsRequest, reply) => {
    const motherboards = await MotherboardService.getAllMotherboards(request.query);
    reply.send(motherboards);
  });

  const getOneSchema = GetOneQuery(DetailedMotherBoardSchema);
  fastify.get('/:id', getOneSchema, async (request: GetOneMotherboardRequest, reply) => {
    const { id } = request.params;
    const motherboard = await MotherboardService.getMotherboardById(id);
    reply.send(motherboard);
  });

  const createOneSchema = CreateOneQuery(CreateMotherBoardSchema, DetailedMotherBoardSchema);
  fastify.post('/', createOneSchema, async (request: PostMotherboardRequest, reply) => {
    const motherboard = await MotherboardService.createMotherboard(request.body);
    reply.send(motherboard);
  });

  const updateOneSchema = UpdateOneQuery(UpdateMotherBoardSchema, DetailedMotherBoardSchema);
  fastify.put('/:id', updateOneSchema, async (request: PutMotherboardRequest, reply) => {
    const { id } = request.params;
    const newMotherboard = await MotherboardService.updateMotherboardById({ id, data: request.body });
    reply.send(newMotherboard);
  });

  const deleteOneSchema = DeleteOneQuery(DetailedMotherBoardSchema);
  fastify.delete('/:id', deleteOneSchema, async (request: DeleteMotherboardRequest, reply) => {
    const { id } = request.params;
    const motherboard = await MotherboardService.deleteMotherboardById(id);
    reply.send(motherboard);
  });

  next();
}
