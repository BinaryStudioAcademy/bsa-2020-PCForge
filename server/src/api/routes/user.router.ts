import { FastifyInstance } from 'fastify';
import { FastifyDone, FastifyOptions } from './fastifyTypes';
import {
  GetOneUserRequest,
  GetAllUsersRequest,
  PostUserRequest,
  DeleteUserRequest,
  PutUserRequest,
  GetUserGamesRequest,
  CreateUserGameRequest,
  DeleteUserGameRequest,
  UserSchema,
  CreateUserSchema,
  UpdateUserSchema,
  GetAllUsersSchema,
  CreateUserGameSchema,
  CreateUserGameResponse,
  GetUserGamesSchema,
  UserGameSchema,
} from './user.schema';
import { GameSchema } from './game.schema';
import {
  getOneQuery,
  getMultipleQuery,
  createOneQuery,
  updateOneQuery,
  deleteOneQuery,
} from '../../helpers/swagger.helper';
import { IFilter } from '../../data/repositories/filters/base.filter';
import { userRequestMiddleware } from '../middlewares/userRequest.middlewarre';
import { triggerServerError } from '../../helpers/global.helper';
import { allowForAuthorized, allowForAdmin } from '../middlewares/allowFor.middleware';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyDone): void {
  const { UserService, GameService, UserGameService } = fastify.services;
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
    if (!user) {
      triggerServerError('User with given email already exist', 403);
    }
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
    // const user = await UserService.deleteUser(id);
    const user = await UserService.activateDeactivateUser(id);
    reply.send(user);
  });

  // Users games
  const getUserGamesSchema = getMultipleQuery(GetUserGamesSchema, IFilter.schema);
  fastify.get('/:id/games', { ...getUserGamesSchema, preHandler }, async (request: GetUserGamesRequest, reply) => {
    allowForAuthorized(request);
    const result = await UserGameService.getUserGames(request.params.id, request.query);
    reply.send(result);
  });

  const createGameSchema = createOneQuery(CreateUserGameSchema, CreateUserGameResponse);
  fastify.post('/:id/games', { ...createGameSchema, preHandler }, async (request: CreateUserGameRequest, reply) => {
    allowForAuthorized(request);
    const game = await GameService.getGameById(request.body.id);
    const result = await UserGameService.findOrCreateUserGame({
      userId: parseInt(request.params.id),
      gameId: parseInt(request.body.id),
    });
    reply.send({
      game,
      isNew: result.isNew,
      userGame: result.userGame,
    });
  });

  const deleteGameSchema = deleteOneQuery(UserGameSchema);
  fastify.delete(
    '/:id/games/:gameId',
    { ...deleteGameSchema, preHandler },
    async (request: DeleteUserGameRequest, reply) => {
      allowForAuthorized(request);
      const deletedUserGame = await UserGameService.deleteUserGame({
        userId: parseInt(request.params.id),
        gameId: parseInt(request.params.gameId),
      });
      reply.send(deletedUserGame);
    }
  );

  next();
}
