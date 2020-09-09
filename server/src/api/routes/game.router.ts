import { FastifyInstance } from 'fastify';
import { FastifyNext, FastifyOptions } from './fastifyTypes';
import {
  PostGameRequest,
  PutGameRequest,
  DeleteGameRequest,
  GetAllGamesRequest,
  GetOneGameRequest,
  GetAllGamesResponse,
  GameSchema,
  CreateGameSchema,
  updateGameSchema,
} from './game.schema';
import {
  getMultipleQuery,
  getOneQuery,
  createOneQuery,
  updateOneQuery,
  deleteOneQuery,
} from '../../helpers/swagger.helper';
import { IGameFilter } from '../../data/repositories/filters/game.filter';
import { userRequestMiddleware } from '../middlewares/userRequest.middlewarre';
import { allowForAuthorized, allowForAdmin } from '../middlewares/allowFor.middleware';
import { GameMiddleware } from '../middlewares/game.middleware';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { GameService } = fastify.services;

  const gameMiddleware = GameMiddleware(fastify);
  const preHandler = userRequestMiddleware(fastify);
  fastify.addHook('preHandler', preHandler);

  const getAllSchema = getMultipleQuery(GetAllGamesResponse, IGameFilter.schema);
  fastify.get('/', getAllSchema, async (request: GetAllGamesRequest, reply) => {
    allowForAuthorized(request);
    const games = await GameService.getAllGames(request.query);
    reply.send(games);
  });

  const getOneSchema = getOneQuery(GameSchema);
  fastify.get('/:id', getOneSchema, async (request: GetOneGameRequest, reply) => {
    allowForAuthorized(request);
    const { id } = request.params;
    const game = await GameService.getGameById(id, request.user.id);
    reply.send(game);
  });

  const createOneSchema = createOneQuery(CreateGameSchema, GameSchema);
  fastify.post('/', createOneSchema, async (request: PostGameRequest, reply) => {
    allowForAdmin(request);
    const game = await GameService.createGame(request.body, gameMiddleware);
    reply.send(game);
  });

  const updateOneSchema = updateOneQuery(updateGameSchema, GameSchema);
  fastify.put('/:id', updateOneSchema, async (request: PutGameRequest, reply) => {
    allowForAdmin(request);
    const { id } = request.params;
    const data = { id, data: request.body };
    const newGame = await GameService.updateGameById(data, gameMiddleware);
    reply.send(newGame);
  });

  const deleteOneSchema = deleteOneQuery(GameSchema);
  fastify.delete('/:id', deleteOneSchema, async (request: DeleteGameRequest, reply) => {
    allowForAdmin(request);
    const { id } = request.params;
    const game = await GameService.deleteGameById(id);
    reply.send(game);
  });

  next();
}
