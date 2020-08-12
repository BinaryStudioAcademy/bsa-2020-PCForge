import { FastifyInstance } from 'fastify';
import { FastifyNext, FastifyOptions } from './fastifyTypes';
import { PostNewsRequest, GetNewsRequest, PutNewsRequest, DeleteNewsRequest } from './news.schema';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { NewsService } = fastify.services;

  fastify.get('/', {}, async (request, reply) => {
    const news = await NewsService.getAllNews();
    reply.send(news);
  });

  fastify.get('/:id', {}, async (request: GetNewsRequest, reply) => {
    const { id } = request.params;
    const news = await NewsService.getNewsById(id);
    reply.send(news);
  });

  fastify.post('/', {}, async (request: PostNewsRequest, reply) => {
    const news = await NewsService.createNews(request.body);
    reply.send(news);
  });

  fastify.put('/:id', {}, async (request: PutNewsRequest, reply) => {
    const { id } = request.params;
    const newNews = await NewsService.updateNewsById({ id, data: request.body });
    reply.send(newNews);
  });

  fastify.delete('/:id', {}, async (request: DeleteNewsRequest, reply) => {
    const { id } = request.params;
    await NewsService.deleteNewsById({ id });
    reply.send({});
  });

  next();
}
