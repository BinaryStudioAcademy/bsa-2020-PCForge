import { FastifyInstance } from 'fastify';
import { FastifyNext, FastifyOptions } from './fastifyTypes';
import {
  PostCommentRequest,
  PutCommentRequest,
  DeleteCommentRequest,
  GetAllCommentsRequest,
  GetOneCommentRequest,
} from './comment.schema';
import { CommentMiddleware } from '../middlewares/comment.middleware';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { CommentService } = fastify.services;

  const commentMiddleware = CommentMiddleware(fastify);

  fastify.get('/', {}, async (request: GetAllCommentsRequest, reply) => {
    const comments = await CommentService.getAllComments(request.query);
    reply.send(comments);
  });

  fastify.get('/:id', {}, async (request: GetOneCommentRequest, reply) => {
    const { id } = request.params;
    const comment = await CommentService.getCommentById(id);
    reply.send(comment);
  });

  fastify.post('/', {}, async (request: PostCommentRequest, reply) => {
    const comment = await CommentService.createComment(request.body, commentMiddleware);
    reply.send(comment);
  });

  fastify.put('/:id', {}, async (request: PutCommentRequest, reply) => {
    const { id } = request.params;
    const newComment = await CommentService.updateCommentById({ id, data: request.body }, commentMiddleware);
    reply.send(newComment);
  });

  fastify.delete('/:id', {}, async (request: DeleteCommentRequest, reply) => {
    const { id } = request.params;
    await CommentService.deleteCommentById(id);
    reply.send({});
  });

  next();
}
