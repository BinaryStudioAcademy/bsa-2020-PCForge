import { FastifyInstance } from 'fastify';
import { FastifyDone, FastifyOptions } from './fastifyTypes';
import {
  GetOneUserRequest,
  GetAllUsersRequest,
  PostUserRequest,
  DeleteUserRequest,
  PutUserRequest,
} from './user.schema';
import { UserModel, UserAttributes } from '../../data/models/user';
import { deleteUserSecureFields } from '../../helpers/security.helper';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyDone): void {
  const { UserService } = fastify.services;

  fastify.get('/', {}, async (request: GetAllUsersRequest, reply) => {
    const users = await UserService.getUsers();
    reply.send(users);
  });

  fastify.get('/:id', {}, async function (request: GetOneUserRequest, reply) {
    const { id } = request.params;
    const user = await UserService.getUser(id);
    if (user) {
      reply.send(user);
    } else {
      reply.code(404).type('text/html').send('Not Found');
    }
  });

  fastify.post('/', {}, async (request: PostUserRequest, reply) => {
    if (typeof request.body === 'string') {
      request.body = JSON.parse(request.body);
    }
    const user = await UserService.createUser(request.body);
    reply.send(user);
  });

  fastify.put('/:id', {}, async (request: PutUserRequest, reply) => {
    const { id } = request.params;
    const { body } = request;
    const oldPassword = body.oldPassword || '';
    try {
      if (oldPassword) {
        delete body.oldPassword;
      }
      const user = await UserService.updateUser(id, body, oldPassword);
      reply.send(user);
    } catch (error) {
      reply.code(500).type('text/html').send(error.message);
    }
  });

  fastify.delete('/:id', {}, async (request: DeleteUserRequest, reply) => {
    const { id } = request.params;
    await UserService.deleteUser(id);
    reply.send({});
  });

  next();
}
