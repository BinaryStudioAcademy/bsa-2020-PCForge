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
  getOneQuery,
  getMultipleQuery,
  createOneQuery,
  updateOneQuery,
  deleteOneQuery,
} from '../../helpers/swagger.helper';
import { userRequestMiddleware } from '../middlewares/userRequest.middlewarre';
import { triggerServerError } from '../../helpers/global.helper';
import { allowForAuthorized, allowForAdmin } from '../middlewares/allowFor.middleware';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyDone): void {
  const { UserService } = fastify.services;
  const preHandler = userRequestMiddleware(fastify);

  const getAllSchema = getMultipleQuery(GetAllUsersSchema);
  fastify.get('/', { ...getAllSchema, preHandler }, async (request: GetAllUsersRequest, reply) => {
    allowForAuthorized(request);
    const users = await UserService.getUsers();
    reply.send(users);
  });

  const getOneSchema = getOneQuery(UserSchema);
  fastify.get('/:id', { ...getOneSchema, preHandler }, async function (request: GetOneUserRequest, reply) {
    allowForAuthorized(request);
    const { id } = request.params;
    const user = await UserService.getUser(id);
    reply.send(user);
  });

  const createSchema = createOneQuery(CreateUserSchema, UserSchema, false);
  fastify.post('/', createSchema, async (request: PostUserRequest, reply) => {
    const user = await UserService.createUser(request.body);
    reply.send(user);
  });

  const updateSchema = updateOneQuery(UpdateUserSchema, UserSchema);
  fastify.put('/:id', { ...updateSchema, preHandler }, async (request: PutUserRequest, reply) => {
    allowForAuthorized(request);
    const { id } = request.params;
    const { body } = request;

    if (request.user.id !== +id && !request.user.isAdmin) {
      triggerServerError('Access Denied', 403);
    }
    const user = await UserService.updateUser(id, body);
    reply.send(user);
  });

  const deleteOneSchema = deleteOneQuery(UserSchema);
  fastify.delete('/:id', { ...deleteOneSchema, preHandler }, async (request: DeleteUserRequest, reply) => {
    allowForAdmin(request);
    const { id } = request.params;
    const user = await UserService.deleteUser(id);
    reply.send(user);
  });

  next();
}
