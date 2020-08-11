import { FastifyInstance } from 'fastify';
import { FastifyNext, FastifyOptions } from './fastifyTypes';
import {
  PostGameRequest,
  PutGameRequest,
  DeleteGameRequest,
  GetAllGamesRequest,
  GetOneGameRequest,
} from './game.schema';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { GameService } = fastify.services;

  fastify.get('/', {}, async (request: GetAllGamesRequest, reply) => {
    const games = await GameService.getAllGames();
    reply.send(games);
  });

  fastify.get('/:id', {}, async (request: GetOneGameRequest, reply) => {
    const { id } = request.params;
    const game = await GameService.getGameById(id);
    reply.send(game);
  });

  fastify.post('/', {}, async (request: PostGameRequest, reply) => {
    const game = await GameService.createGame(request.body);
    reply.send(game);
  });

  fastify.put('/:id', {}, async (request: PutGameRequest, reply) => {
    const { id } = request.params;
    const newGame = await GameService.updateGameById({ id, data: request.body });
    reply.send(newGame);
  });

  fastify.delete('/:id', {}, async (request: DeleteGameRequest, reply) => {
    const { id } = request.params;
    await GameService.deleteGameById({ id });
    reply.send({});
  });

  next();
}
