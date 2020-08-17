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
import { CreateOneQuery, GetMultipleQuery, GetOneQuery, UpdateOneQuery, DeleteOneQuery } from '../../helpers/swagger.helper';
import { IFilter } from '../../data/repositories/filters/base.filter';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { SocketService } = fastify.services;

  const getAllSchema = GetMultipleQuery(GetAllSockets, IFilter.schema);
  fastify.get('/', getAllSchema, async (request: GetAllSocketsRequest, reply) => {
    const sockets = await SocketService.getAllSockets(request.query);
    reply.send(sockets);
  });

  const getOneSchema = GetOneQuery(SocketSchema);
  fastify.get('/:id', getOneSchema, async (request: GetOneSocketRequest, reply) => {
    const { id } = request.params;
    const socket = await SocketService.getSocketById(id);
    reply.send(socket);
  });

  const createOneSchema = CreateOneQuery(CreateSocketSchema, {});
  fastify.post('/', createOneSchema, async (request: PostSocketRequest, reply) => {
    const socket = await SocketService.createSocket(request.body);
    reply.send(socket);
  });

  const updateOneSchema = UpdateOneQuery(UpdateSocketSchema, SocketSchema);
  fastify.put('/:id', updateOneSchema, async (request: PutSocketRequest, reply) => {
    const { id } = request.params;
    const newSocket = await SocketService.updateSocketById({ id, data: request.body });
    reply.send(newSocket);
  });

  const deleteOneSchema = DeleteOneQuery();
  fastify.delete('/:id', deleteOneSchema, async (request: DeleteSocketRequest, reply) => {
    const { id } = request.params;
    await SocketService.deleteSocketById(id);
    reply.send({});
  });

  next();
}
