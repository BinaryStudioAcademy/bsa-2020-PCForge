import { FastifyInstance } from 'fastify';
import { FastifyNext, FastifyOptions } from './fastifyTypes';
import {
  PostMotherboardRequest,
  PutMotherboardRequest,
  DeleteMotherboardRequest,
  GetAllMotherboardsRequest,
  GetOneMotherboardRequest,
  GetAllMotherBoardResponse,
  CreateMotherBoardSchema,
  UpdateMotherBoardSchema,
  DetailedMotherBoardSchema,
  MotherBoardSchema,
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
import { renameQuery } from '../middlewares/rename.middleware';
import { MotherboardMiddleware } from '../middlewares/motherboard.middleware';
import { decodeName } from '../middlewares/decodeName.middleware';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { MotherboardService, HardwareService } = fastify.services;

  const motherboardMiddleware = MotherboardMiddleware(fastify);
  const preHandler = userRequestMiddleware(fastify);
  fastify.addHook('preHandler', preHandler);

  const getAllSchema = getMultipleQuery(GetAllMotherBoardResponse, IMotherboardFilter.schema);
  fastify.get('/', getAllSchema, async (request: GetAllMotherboardsRequest, reply) => {
    allowForAuthorized(request);
    decodeName(request);
    renameQuery(request, ['socketIds', 'socketId'], ['ramTypeIds', 'ramTypeId'], ['sataMultiple', 'sata']);
    const motherboards = await HardwareService.getTopMotherboards(request.query);
    reply.send(motherboards);
  });

  const getOneSchema = getOneQuery(DetailedMotherBoardSchema);
  fastify.get('/:id', getOneSchema, async (request: GetOneMotherboardRequest, reply) => {
    allowForAuthorized(request);
    const { id } = request.params;
    const motherboard = await MotherboardService.getMotherboardById(id);
    reply.send(motherboard);
  });

  const createOneSchema = createOneQuery(CreateMotherBoardSchema, MotherBoardSchema);
  fastify.post('/', createOneSchema, async (request: PostMotherboardRequest, reply) => {
    allowForAdmin(request);
    const motherboard = await MotherboardService.createMotherboard(request.body, motherboardMiddleware);
    reply.send(motherboard);
  });

  const updateOneSchema = updateOneQuery(UpdateMotherBoardSchema, MotherBoardSchema);
  fastify.put('/:id', updateOneSchema, async (request: PutMotherboardRequest, reply) => {
    allowForAdmin(request);
    const { id } = request.params;
    const data = { id, data: request.body };
    const newMotherboard = await MotherboardService.updateMotherboardById(data, motherboardMiddleware);
    reply.send(newMotherboard);
  });

  const deleteOneSchema = deleteOneQuery(MotherBoardSchema);
  fastify.delete('/:id', deleteOneSchema, async (request: DeleteMotherboardRequest, reply) => {
    allowForAdmin(request);
    const { id } = request.params;
    const motherboard = await MotherboardService.deleteMotherboardById(id);
    reply.send(motherboard);
  });

  next();
}
