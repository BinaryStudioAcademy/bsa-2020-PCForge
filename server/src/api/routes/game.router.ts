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
import { GetMultipleQuery, GetOneQuery, CreateOneQuery, UpdateOneQuery, DeleteOneQuery } from '../../helpers/swagger.helper';
import { IGameFilter } from '../../data/repositories/filters/game.filter';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { GameService } = fastify.services;

  const getAllSchema = GetMultipleQuery(GetAllGamesResponse, IGameFilter.schema)
  fastify.get('/', getAllSchema, async (request: GetAllGamesRequest, reply) => {
    const games = await GameService.getAllGames(request.query);
    reply.send(games);
  });

  const getOneSchema = GetOneQuery(GameSchema);
  fastify.get('/:id', getOneSchema, async (request: GetOneGameRequest, reply) => {
    const { id } = request.params;
    const game = await GameService.getGameById(id);
    reply.send(game);
  });

  const createOneSchema = CreateOneQuery(CreateGameSchema, GameSchema);
  fastify.post('/', createOneSchema, async (request: PostGameRequest, reply) => {
    const game = await GameService.createGame(request.body);
    reply.send(game);
  });

  const updateOneSchema = UpdateOneQuery(updateGameSchema, GameSchema);
  fastify.put('/:id', updateOneSchema, async (request: PutGameRequest, reply) => {
    const { id } = request.params;
    const newGame = await GameService.updateGameById({ id, data: request.body });
    reply.send(newGame);
  });

  const deleteOneSchema = DeleteOneQuery(GameSchema);
  fastify.delete('/:id', deleteOneSchema, async (request: DeleteGameRequest, reply) => {
    const { id } = request.params;
    const game = await GameService.deleteGameById(id);
    reply.send(game);
  });

  next();
}
