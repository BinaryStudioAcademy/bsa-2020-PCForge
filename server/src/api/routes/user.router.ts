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
} from './user.schema';
import { GameSchema } from './game.schema';
import {
  GetOneQuery,
  GetMultipleQuery,
  CreateOneQuery,
  UpdateOneQuery,
  DeleteOneQuery,
} from '../../helpers/swagger.helper';
import { IFilter } from '../../data/repositories/filters/base.filter';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyDone): void {
  const { UserService, GameService, UserGameService } = fastify.services;

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

  // Users games
  const getUserGamesSchema = GetMultipleQuery(GetUserGamesSchema, IFilter.schema);
  fastify.get('/:id/games', getUserGamesSchema, async (request: GetUserGamesRequest, reply) => {
    const result = await UserGameService.getUserGames(request.params.id, request.query);
    reply.send(result);
  });

  const createGameSchema = CreateOneQuery(CreateUserGameSchema, CreateUserGameResponse);
  fastify.post('/:id/games', createGameSchema, async (request: CreateUserGameRequest, reply) => {
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

  const deleteGameSchema = DeleteOneQuery();
  fastify.delete('/:id/games/:gameId', deleteGameSchema, async (request: DeleteUserGameRequest, reply) => {
    await UserGameService.deleteUserGame({
      userId: parseInt(request.params.id),
      gameId: parseInt(request.params.gameId),
    });
    reply.send({});
  });

  next();
}
