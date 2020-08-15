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
} from './user.schema';
import { GetOneQuery, GetMultipleQuery, CreateOneQuery, UpdateOneQuery, DeleteOneQuery } from '../../helpers/swagger.helper';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyDone): void {
  const { UserService } = fastify.services;

  const swaggerGetAllSchema = GetMultipleQuery(UserSchema);
  fastify.get('/', swaggerGetAllSchema, async (request: GetAllUsersRequest, reply) => {
    const users = await UserService.getUsers();
    reply.send(users);
  });

  const swaggerGetOneSchema = GetOneQuery(UserSchema)
  fastify.get('/:id', swaggerGetOneSchema, async function (request: GetOneUserRequest, reply) {
    const { id } = request.params;
    const user = await UserService.getUser(id);
    if (user) {
      reply.send(user);
    } else {
      reply.code(404).type('text/html').send('Not Found');
    }
  });

  const swaggerCreateSchema = CreateOneQuery(CreateUserSchema, UserSchema)
  fastify.post('/', swaggerCreateSchema, async (request: PostUserRequest, reply) => {
    const user = await UserService.createUser(request.body);
    reply.send(user);
  });

  const swaggerUpdateSchema = UpdateOneQuery(UpdateUserSchema, UserSchema)
  fastify.put('/:id', swaggerUpdateSchema, async (request: PutUserRequest, reply) => {
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

  fastify.delete('/:id', DeleteOneQuery(), async (request: DeleteUserRequest, reply) => {
    const { id } = request.params;
    await UserService.deleteUser(id);
    reply.send({});
  });

  next();
}
