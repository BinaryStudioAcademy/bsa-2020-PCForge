import { FastifyInstance } from 'fastify';
import { FastifyNext, FastifyOptions } from './fastifyTypes';
import {
  PostSocketRequest,
  GetOneSocketRequest,
  PutSocketRequest,
  DeleteSocketRequest,
  GetAllSocketsRequest,
  CreateSocketSchema,
  GetAllSockets,
  SocketSchema,
  UpdateSocketSchema,
} from './socket.schema';
import { createOneQuery, getMultipleQuery, getOneQuery, updateOneQuery, deleteOneQuery } from '../../helpers/swagger.helper';
import { IFilter } from '../../data/repositories/filters/base.filter';
import { userRequestMiddleware } from '../middlewares/userRequest.middlewarre';
import { allowForAdmin, allowForAuthorized } from '../middlewares/allowFor.middleware';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { SocketService } = fastify.services;
  const preHandler = userRequestMiddleware(fastify);
  fastify.addHook('preHandler', preHandler);

  const getAllSchema = getMultipleQuery(GetAllSockets, IFilter.schema);
  fastify.get('/', getAllSchema, async (request: GetAllSocketsRequest, reply) => {
    allowForAuthorized(request);
    const sockets = await SocketService.getAllSockets(request.query);
    reply.send(sockets);
  });

  const getOneSchema = getOneQuery(SocketSchema, undefined, false);
  fastify.get('/:id', getOneSchema, async (request: GetOneSocketRequest, reply) => {
    allowForAuthorized(request);
    const { id } = request.params;
    const socket = await SocketService.getSocketById(id);
    reply.send(socket);
  });

  const createOneSchema = createOneQuery(CreateSocketSchema, SocketSchema);
  fastify.post('/', createOneSchema, async (request: PostSocketRequest, reply) => {
    allowForAdmin(request);
    const socket = await SocketService.createSocket(request.body);
    reply.send(socket);
  });

  const updateOneSchema = updateOneQuery(UpdateSocketSchema, SocketSchema);
  fastify.put('/:id', updateOneSchema, async (request: PutSocketRequest, reply) => {
    allowForAdmin(request);
    const { id } = request.params;
    const newSocket = await SocketService.updateSocketById({ id, data: request.body });
    reply.send(newSocket);
  });

  const deleteOneSchema = deleteOneQuery(SocketSchema);
  fastify.delete('/:id', deleteOneSchema, async (request: DeleteSocketRequest, reply) => {
    allowForAdmin(request);
    const { id } = request.params;
    const socket = await SocketService.deleteSocketById(id);
    reply.send(socket);
  });

  next();
}
