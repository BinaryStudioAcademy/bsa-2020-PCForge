import { FastifyInstance } from 'fastify';
import { GetUserRequest, PostUserRequest, DeleteUserRequest } from './user.schema';
import { UserAttributes } from '../../data/models/user';

export function router(fastify: FastifyInstance, opts, next): void {
  const { UserService } = fastify.services;

  fastify.get('/', {}, async (request: GetUserRequest, reply) => {
    const users = await UserService.getUsers();
    reply.send(users);
  });

  fastify.get('/:id', {}, async function (request) {
    const { id } = request.params;
    const user = UserService.getUser(id);
    return user;
  });

  fastify.post('/', {}, async (request: PostUserRequest, reply) => {
    const data: UserAttributes = { ...request.body };
    data.isAdmin = false;

    data.password = UserService.hash(data.password);

    const user = await UserService.createUser(data);
    reply.send(user);
  });

  fastify.put('/:id', {}, async (request: PostUserRequest, reply) => {
    const { id } = request.params;
    const user = await UserService.updateUser(id, request.body);
    reply.send(user);
  });

  fastify.delete('/:id', {}, async (request: DeleteUserRequest, reply) => {
    const { id } = request.params;
    await UserService.deleteUser(id);
    reply.send({});
  });

  next();
}
