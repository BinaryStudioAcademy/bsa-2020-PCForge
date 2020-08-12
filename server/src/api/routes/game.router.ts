import { FastifyInstance } from 'fastify';
import { FastifyNext, FastifyOptions } from './fastifyTypes';
import {
  GetGameByIdRequest,
  GetAllGamesRequest,
  PostGameRequest,
  PutGameRequest,
  DeleteGameRequest,
} from './game.schema';

export function router(fastify: FastifyInstance, opt: FastifyOptions, next: FastifyNext): void {
  const { GameService } = fastify.services;

  fastify.get('/:id', {}, async (request: GetGameByIdRequest, reply) => {
    const { id } = request.params;
    const game = await GameService.getGameById(id);
    reply.send(game);
  });

  fastify.get('/', {}, async (request: GetAllGamesRequest, reply) => {
    const games = await GameService.getAllGames(request.query);
    reply.send(games);
  });

  fastify.post('/', {}, async (request: PostGameRequest, reply) => {
    const game = await GameService.createGame(request.body);
    reply.send(game);
  });

  fastify.put('/:id', {}, async (request: PutGameRequest, reply) => {
    const { id } = request.params;
    const game = await GameService.updateGameById(id, request.body);
    reply.send(game);
  });

  fastify.delete('/:id', {}, async (request: DeleteGameRequest, reply) => {
    const { id } = request.params;
    await GameService.deleteGameById(id);
    reply.send({});
  });

  next();
}
