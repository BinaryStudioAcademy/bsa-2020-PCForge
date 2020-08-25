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
} from './news.schema';
import {
  GetMultipleQuery,
  GetOneQuery,
  CreateOneQuery,
  UpdateOneQuery,
  DeleteOneQuery,
} from '../../helpers/swagger.helper';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { NewsService } = fastify.services;

  const getAllSchema = GetMultipleQuery(GetAllNewsResponse);
  fastify.get('/', getAllSchema, async (request, reply) => {
    const news = await NewsService.getAllNews();
    reply.send(news);
  });

  const getOneSchema = GetOneQuery(NewsSchema);
  fastify.get('/:id', getOneSchema, async (request: GetNewsRequest, reply) => {
    const { id } = request.params;
    const news = await NewsService.getNewsById(id);
    reply.send(news);
  });

  const createOneSchema = CreateOneQuery(CreateNewsSchema, NewsSchema);
  fastify.post('/', createOneSchema, async (request: PostNewsRequest, reply) => {
    const news = await NewsService.createNews(request.body);
    reply.send(news);
  });

  const updateOneSchema = UpdateOneQuery(UpdateNewsSchema, NewsSchema);
  fastify.put('/:id', updateOneSchema, async (request: PutNewsRequest, reply) => {
    const { id } = request.params;
    const newNews = await NewsService.updateNewsById({ id, data: request.body });
    reply.send(newNews);
  });

  const deleteOneSchema = DeleteOneQuery();
  fastify.delete('/:id', deleteOneSchema, async (request: DeleteNewsRequest, reply) => {
    const { id } = request.params;
    await NewsService.deleteNewsById(id);
    reply.send({});
  });

  next();
}
