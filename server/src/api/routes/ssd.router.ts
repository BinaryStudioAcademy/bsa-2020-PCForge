import { FastifyInstance } from 'fastify';
import { FastifyNext, FastifyOptions } from './fastifyTypes';
import {
  PostSsdRequest,
  GetOneSsdRequest,
  PutSsdRequest,
  DeleteSsdRequest,
  GetAllSsdsRequest,
  GetAllSsdsResponse,
  SsdSchema,
  CreateSsdSchema,
  UpdateSsdSchema,
} from './ssd.schema';
import {
  getMultipleQuery,
  getOneQuery,
  createOneQuery,
  updateOneQuery,
  deleteOneQuery,
} from '../../helpers/swagger.helper';
import { ISsdFilter } from '../../data/repositories/filters/ssd.filter';
import { userRequestMiddleware } from '../middlewares/userRequest.middlewarre';
import { allowForAuthorized, allowForAdmin } from '../middlewares/allowFor.middleware';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { SsdService } = fastify.services;

  const preHandler = userRequestMiddleware(fastify);
  fastify.addHook('preHandler', preHandler);

  const getAllSchema = getMultipleQuery(GetAllSsdsResponse, ISsdFilter.schema);
  fastify.get('/', getAllSchema, async (request: GetAllSsdsRequest, reply) => {
    allowForAuthorized(request);
    const ssds = await SsdService.getAllSsds(request.query);
    reply.send(ssds);
  });

  const getOneSchema = getOneQuery(SsdSchema);
  fastify.get('/:id', getOneSchema, async (request: GetOneSsdRequest, reply) => {
    allowForAuthorized(request);
    const { id } = request.params;
    const ssd = await SsdService.getSsdById(id);
    reply.send(ssd);
  });

  const createOneSchema = createOneQuery(CreateSsdSchema, SsdSchema);
  fastify.post('/', createOneSchema, async (request: PostSsdRequest, reply) => {
    allowForAdmin(request);
    const ssd = await SsdService.createSsd(request.body);
    reply.send(ssd);
  });

  const updateOneSchema = updateOneQuery(UpdateSsdSchema, SsdSchema);
  fastify.put('/:id', updateOneSchema, async (request: PutSsdRequest, reply) => {
    allowForAdmin(request);
    const { id } = request.params;
    const newSsd = await SsdService.updateSsdById({ id, data: request.body });
    reply.send(newSsd);
  });

  const deleteOneSchema = deleteOneQuery(SsdSchema);
  fastify.delete('/:id', deleteOneSchema, async (request: DeleteSsdRequest, reply) => {
    allowForAdmin(request);
    const { id } = request.params;
    const ssd = await SsdService.deleteSsdById({ id });
    reply.send(ssd);
  });

  next();
}
