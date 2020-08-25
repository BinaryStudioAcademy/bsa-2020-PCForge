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
import { createOneQuery, getMultipleQuery, getOneQuery, updateOneQuery, deleteOneQuery } from '../../helpers/swagger.helper';
import { IFilter } from '../../data/repositories/filters/base.filter';
import { userRequestMiddleware } from '../middlewares/userRequest.middlewarre';
import { allowForAdmin, allowForAuthorized } from '../middlewares/allowFor.middleware';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { TopGameService } = fastify.services;
  const preHandler = userRequestMiddleware(fastify);
  fastify.addHook('preHandler', preHandler);

  const getAllSchema = getMultipleQuery(GetAllTopGames, IFilter.schema);
  fastify.get('/', getAllSchema, async (request: GetAllTopGamesRequest, reply) => {
    allowForAuthorized(request);
    const TopGames = await TopGameService.getAllTopGames(request.query);
    reply.send(TopGames);
  });

  const getOneSchema = getOneQuery(TopGameSchema, undefined);
  fastify.get('/:id', getOneSchema, async (request: GetOneTopGameRequest, reply) => {
    allowForAuthorized(request);
    const { id } = request.params;
    const TopGame = await TopGameService.getTopGameById(id);
    reply.send(TopGame);
  });

  const createOneSchema = createOneQuery(CreateTopGameSchema, TopGameSchema);
  fastify.post('/', createOneSchema , async (request: PostTopGameRequest, reply) => {
    allowForAdmin(request);
    const TopGame = await TopGameService.createTopGame(request.body);
    reply.send(TopGame);
  });

  const updateOneSchema = updateOneQuery(UpdateTopGameSchema, TopGameSchema);
  fastify.put('/:id', updateOneSchema, async (request: PutTopGameRequest, reply) => {
    allowForAdmin(request);
    const { id } = request.params;
    const newTopGame = await TopGameService.updateTopGameById({ id, data: request.body });
    reply.send(newTopGame);
  });

  const deleteOneSchema = deleteOneQuery(TopGameSchema);
  fastify.delete('/:id', deleteOneSchema, async (request: DeleteTopGameRequest, reply) => {
    allowForAdmin(request);
    const { id } = request.params;
    const topGame = await TopGameService.deleteTopGameById(id);
    reply.send(topGame);
  });

  next();
}
