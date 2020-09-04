import { FastifyInstance } from 'fastify';
import { FastifyNext, FastifyOptions } from './fastifyTypes';
import {
  GetAllCommentRatesRequest,
  GetAllCommentRatesSchema,
  GetOneCommentRatesRequest,
  PostCommentRatesRequest,
  CreateCommentRateSchema,
  CommentRatesSchema,
} from './commentRate.schema';
import { getMultipleQuery, getOneQuery, createOneQuery } from '../../helpers/swagger.helper';
import { ICommentRateFilter } from '../../data/repositories/filters/commentRate.filter';
import { userRequestMiddleware } from '../middlewares/userRequest.middlewarre';
import { allowForAuthorized } from '../middlewares/allowFor.middleware';
import { CommentRateMiddleWare } from '../middlewares/commentRate.middleware';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { CommentRateService } = fastify.services;
  const commentRateMiddleWare = CommentRateMiddleWare(fastify);
  const preHandler = userRequestMiddleware(fastify);
  fastify.addHook('preHandler', preHandler);

  const getAllSchema = getMultipleQuery(GetAllCommentRatesSchema, ICommentRateFilter.schema);
  fastify.get('/', getAllSchema, async (request: GetAllCommentRatesRequest, reply) => {
    allowForAuthorized(request);
    const commentRates = await CommentRateService.getAllCommentsRates(request.query);
    reply.send(commentRates);
  });

  const getOneSchema = getOneQuery(CommentRatesSchema);
  fastify.get('/:id', getOneSchema, async (request: GetOneCommentRatesRequest, reply) => {
    allowForAuthorized(request);
    const { id } = request.params;
    const commentRate = await CommentRateService.getCommentRateById(id);
    reply.send(commentRate);
  });

  const createOneSchema = createOneQuery(CreateCommentRateSchema, CommentRatesSchema);
  fastify.post('/', createOneSchema, async (request: PostCommentRatesRequest, reply) => {
    allowForAuthorized(request);
    request.body.userId = request.user.id;
    const commentRate = await CommentRateService.createCommentRate(request.body, commentRateMiddleWare);
    reply.send(commentRate);
  });

  next();
}
