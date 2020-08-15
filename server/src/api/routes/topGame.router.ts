import { FastifyInstance } from 'fastify';
import { FastifyNext, FastifyOptions } from './fastifyTypes';
import {
  PostTopGameRequest,
  PutTopGameRequest,
  DeleteTopGameRequest,
  GetAllTopGamesRequest,
  GetOneTopGameRequest,
  CreateTopGameSchema,
} from './topGame.schema';
import { CreateOneQuery } from '../../helpers/swagger.helper';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { TopGameService } = fastify.services;

  fastify.get('/', {}, async (request: GetAllTopGamesRequest, reply) => {
    const TopGames = await TopGameService.getAllTopGames(request.query);
    console.log(TopGames);
    reply.send(TopGames);
  });

  fastify.get('/:id', {}, async (request: GetOneTopGameRequest, reply) => {
    const { id } = request.params;
    const TopGame = await TopGameService.getTopGameById(id);
    reply.send(TopGame);
  });

  const swaggerCreationSchema = CreateOneQuery(CreateTopGameSchema, {});
  fastify.post('/', swaggerCreationSchema , async (request: PostTopGameRequest, reply) => {
    const TopGame = await TopGameService.createTopGame(request.body);
    reply.send(TopGame);
  });

  fastify.put('/:id', {}, async (request: PutTopGameRequest, reply) => {
    const { id } = request.params;
    const newTopGame = await TopGameService.updateTopGameById({ id, data: request.body });
    reply.send(newTopGame);
  });

  fastify.delete('/:id', {}, async (request: DeleteTopGameRequest, reply) => {
    const { id } = request.params;
    await TopGameService.deleteTopGameById(id);
    reply.send({});
  });

  next();
}
