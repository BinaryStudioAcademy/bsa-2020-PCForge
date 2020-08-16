import { FastifyInstance } from 'fastify';
import { FastifyNext, FastifyOptions } from './fastifyTypes';
import {
  PostTopGameRequest,
  PutTopGameRequest,
  DeleteTopGameRequest,
  GetAllTopGamesRequest,
  GetOneTopGameRequest,
  CreateTopGameSchema,
  GetAllTopGames,
  TopGameSchema,
  UpdateTopGameSchema,
} from './topGame.schema';
import { CreateOneQuery, GetMultipleQuery, GetOneQuery, UpdateOneQuery, DeleteOneQuery } from '../../helpers/swagger.helper';
import { IFilter } from '../../data/repositories/filters/base.filter';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { TopGameService } = fastify.services;

  const getAllSchema = GetMultipleQuery(GetAllTopGames, IFilter.schema);
  fastify.get('/', getAllSchema, async (request: GetAllTopGamesRequest, reply) => {
    const TopGames = await TopGameService.getAllTopGames(request.query);
    console.log(TopGames);
    reply.send(TopGames);
  });

  const getOneSchema = GetOneQuery(TopGameSchema);
  fastify.get('/:id', getOneSchema, async (request: GetOneTopGameRequest, reply) => {
    const { id } = request.params;
    const TopGame = await TopGameService.getTopGameById(id);
    reply.send(TopGame);
  });

  const createOneSchema = CreateOneQuery(CreateTopGameSchema, TopGameSchema);
  fastify.post('/', createOneSchema , async (request: PostTopGameRequest, reply) => {
    const TopGame = await TopGameService.createTopGame(request.body);
    reply.send(TopGame);
  });

  const updateOneSchema = UpdateOneQuery(UpdateTopGameSchema, TopGameSchema);
  fastify.put('/:id', updateOneSchema, async (request: PutTopGameRequest, reply) => {
    const { id } = request.params;
    const newTopGame = await TopGameService.updateTopGameById({ id, data: request.body });
    reply.send(newTopGame);
  });

  const deleteOneSchema = DeleteOneQuery();
  fastify.delete('/:id', deleteOneSchema, async (request: DeleteTopGameRequest, reply) => {
    const { id } = request.params;
    await TopGameService.deleteTopGameById(id);
    reply.send({});
  });

  next();
}
