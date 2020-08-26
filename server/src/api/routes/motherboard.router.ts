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
  getMultipleQuery,
  getOneQuery,
  createOneQuery,
  updateOneQuery,
  deleteOneQuery,
} from '../../helpers/swagger.helper';
import { IMotherboardFilter } from '../../data/repositories/filters/motherboard.filter';
import { userRequestMiddleware } from '../middlewares/userRequest.middlewarre';
import { allowForAuthorized, allowForAdmin } from '../middlewares/allowFor.middleware';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { MotherboardService } = fastify.services;
  const preHandler = userRequestMiddleware(fastify);
  fastify.addHook('preHandler', preHandler);

  const getAllSchema = getMultipleQuery(GetAllMotherBoardResponse, IMotherboardFilter.schema);
  fastify.get('/', getAllSchema, async (request: GetAllMotherboardsRequest, reply) => {
    allowForAuthorized(request);
    const motherboards = await MotherboardService.getAllMotherboards(request.query);
    reply.send(motherboards);
  });

  const getOneSchema = getOneQuery(DetailedMotherBoardSchema);
  fastify.get('/:id', getOneSchema, async (request: GetOneMotherboardRequest, reply) => {
    allowForAuthorized(request);
    const { id } = request.params;
    const motherboard = await MotherboardService.getMotherboardById(id);
    reply.send(motherboard);
  });

  const createOneSchema = createOneQuery(CreateMotherBoardSchema, DetailedMotherBoardSchema);
  fastify.post('/', createOneSchema, async (request: PostMotherboardRequest, reply) => {
    allowForAdmin(request);
    const motherboard = await MotherboardService.createMotherboard(request.body);
    reply.send(motherboard);
  });

  const updateOneSchema = updateOneQuery(UpdateMotherBoardSchema, DetailedMotherBoardSchema);
  fastify.put('/:id', updateOneSchema, async (request: PutMotherboardRequest, reply) => {
    allowForAdmin(request);
    const { id } = request.params;
    const newMotherboard = await MotherboardService.updateMotherboardById({ id, data: request.body });
    reply.send(newMotherboard);
  });

  const deleteOneSchema = deleteOneQuery(DetailedMotherBoardSchema);
  fastify.delete('/:id', deleteOneSchema, async (request: DeleteMotherboardRequest, reply) => {
    allowForAdmin(request);
    const { id } = request.params;
    const motherboard = await MotherboardService.deleteMotherboardById(id);
    reply.send(motherboard);
  });

  next();
}
