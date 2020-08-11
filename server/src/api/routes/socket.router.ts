import { FastifyInstance } from 'fastify';
import { FastifyNext, FastifyOptions } from './fastifyTypes';
import { PostSocketRequest, GetSocketRequest, PutSocketRequest, DeleteSocketRequest } from './socket.schema';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { SocketService } = fastify.services;

  fastify.get('/', {}, async (request, reply) => {
    const sockets = await SocketService.getAllSockets();
    reply.send(sockets);
  });

  fastify.get('/:id', {}, async (request: GetSocketRequest, reply) => {
    const { id } = request.params;
    const socket = await SocketService.getSocketById(id);
    reply.send(socket);
  });

  fastify.post('/', {}, async (request: PostSocketRequest, reply) => {
    const socket = await SocketService.createSocket(request.body);
    reply.send(socket);
  });

  fastify.put('/:id', {}, async (request: PutSocketRequest, reply) => {
    const { id } = request.params;
    const newSocket = await SocketService.updateSocketById({ id, data: request.body });
    reply.send(newSocket);
  });

  fastify.delete('/:id', {}, async (request: DeleteSocketRequest, reply) => {
    const { id } = request.params;
    await SocketService.deleteSocketById({ id });
    reply.send({});
  });

  next();
}
