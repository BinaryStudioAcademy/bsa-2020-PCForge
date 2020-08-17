import { FastifyInstance } from 'fastify';
import { FastifyDone, FastifyOptions } from './fastifyTypes';
import {
  GetOneUserRequest,
  GetAllUsersRequest,
  PostUserRequest,
  DeleteUserRequest,
  PutUserRequest,
  UserSchema,
  CreateUserSchema,
  UpdateUserSchema,
  GetAllUsersSchema,
} from './user.schema';
import {
  GetOneQuery,
  GetMultipleQuery,
  CreateOneQuery,
  UpdateOneQuery,
  DeleteOneQuery,
} from '../../helpers/swagger.helper';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyDone): void {
  const { UserService } = fastify.services;

  const getAllSchema = GetMultipleQuery(GetAllUsersSchema);
  fastify.get('/', getAllSchema, async (request: GetAllUsersRequest, reply) => {
    const users = await UserService.getUsers();
    reply.send(users);
  });

  const getOneSchema = GetOneQuery(UserSchema);
  fastify.get('/:id', getOneSchema, async function (request: GetOneUserRequest, reply) {
    const { id } = request.params;
    const user = await UserService.getUser(id);
    reply.send(user);
  });

  const createSchema = CreateOneQuery(CreateUserSchema, UserSchema);
  fastify.post('/', createSchema, async (request: PostUserRequest, reply) => {
    const user = await UserService.createUser(request.body);
    reply.send(user);
  });

  const updateSchema = UpdateOneQuery(UpdateUserSchema, UserSchema);
  fastify.put('/:id', updateSchema, async (request: PutUserRequest, reply) => {
    const { id } = request.params;
    const { body } = request;
    const user = await UserService.updateUser(id, body);
    reply.send(user);
  });

  const deleteOneSchema = DeleteOneQuery();
  fastify.delete('/:id', deleteOneSchema, async (request: DeleteUserRequest, reply) => {
    const { id } = request.params;
    await UserService.deleteUser(id);
    reply.send({});
  });

  next();
}
