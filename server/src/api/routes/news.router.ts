import { FastifyInstance } from 'fastify';
import { FastifyNext, FastifyOptions } from './fastifyTypes';
import {
  PostNewsRequest,
  GetNewsRequest,
  PutNewsRequest,
  DeleteNewsRequest,
  NewsSchema,
  GetAllNewsResponse,
  CreateNewsSchema,
  UpdateNewsSchema,
  GetAllNews,
} from './news.schema';
import {
  getMultipleQuery,
  getOneQuery,
  createOneQuery,
  updateOneQuery,
  deleteOneQuery,
} from '../../helpers/swagger.helper';
import { userRequestMiddleware } from '../middlewares/userRequest.middlewarre';
import { allowForAuthorized, allowForAdmin } from '../middlewares/allowFor.middleware';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { NewsService } = fastify.services;
  const preHandler = userRequestMiddleware(fastify);
  fastify.addHook('preHandler', preHandler);

  const getAllSchema = getMultipleQuery(GetAllNewsResponse);
  fastify.get('/', getAllSchema, async (request: GetAllNews, reply) => {
    allowForAuthorized(request);
    const news = await NewsService.getAllNews(request.query);
    reply.send(news);
  });

  const getOneSchema = getOneQuery(NewsSchema);
  fastify.get('/:id', getOneSchema, async (request: GetNewsRequest, reply) => {
    allowForAuthorized(request);
    const { id } = request.params;
    const news = await NewsService.getNewsById(id);
    reply.send(news);
  });

  const createOneSchema = createOneQuery(CreateNewsSchema, NewsSchema);
  fastify.post('/', createOneSchema, async (request: PostNewsRequest, reply) => {
    allowForAdmin(request);
    const news = await NewsService.createNews(request.body);
    reply.send(news);
  });

  const updateOneSchema = updateOneQuery(UpdateNewsSchema, NewsSchema);
  fastify.put('/:id', updateOneSchema, async (request: PutNewsRequest, reply) => {
    allowForAdmin(request);
    const { id } = request.params;
    const newNews = await NewsService.updateNewsById({ id, data: request.body });
    reply.send(newNews);
  });

  const deleteOneSchema = deleteOneQuery(NewsSchema);
  fastify.delete('/:id', deleteOneSchema, async (request: DeleteNewsRequest, reply) => {
    allowForAdmin(request);
    const { id } = request.params;
    const news = await NewsService.deleteNewsById(id);
    reply.send(news);
  });

  next();
}
