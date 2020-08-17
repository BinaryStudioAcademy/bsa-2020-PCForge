import { FastifyInstance } from 'fastify';
import { FastifyNext, FastifyOptions } from './fastifyTypes';
import {
  PostCommentRequest,
  PutCommentRequest,
  DeleteCommentRequest,
  GetAllCommentsRequest,
  GetOneCommentRequest,
  GetAllComments,
  CommentSchema,
  UpdateCommentSchema,
} from './comment.schema';
import { CommentMiddleware } from '../middlewares/comment.middleware';
import { GetMultipleQuery, GetOneQuery, CreateOneQuery, UpdateOneQuery, DeleteOneQuery } from '../../helpers/swagger.helper';
import { ICommentFilter } from '../../data/repositories/filters/comment.filter';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { CommentService } = fastify.services;

  const commentMiddleware = CommentMiddleware(fastify);

  const getAllSchema = GetMultipleQuery(GetAllComments, ICommentFilter.schema);
  fastify.get('/', getAllSchema, async (request: GetAllCommentsRequest, reply) => {
    const comments = await CommentService.getAllComments(request.query);
    reply.send(comments);
  });

  const getCommentSchema = GetOneQuery(CommentSchema);
  fastify.get('/:id', getCommentSchema, async (request: GetOneCommentRequest, reply) => {
    const { id } = request.params;
    const comment = await CommentService.getCommentById(id);
    reply.send(comment);
  });

  const createCommentSchema = CreateOneQuery(UpdateCommentSchema, CommentSchema);
  fastify.post('/', createCommentSchema, async (request: PostCommentRequest, reply) => {
    const comment = await CommentService.createComment(request.body, commentMiddleware);
    reply.send(comment);
  });

  const updateCommentSchema = UpdateOneQuery(UpdateCommentSchema, CommentSchema);
  fastify.put('/:id', updateCommentSchema, async (request: PutCommentRequest, reply) => {
    const { id } = request.params;
    const newComment = await CommentService.updateCommentById({ id, data: request.body }, commentMiddleware);
    reply.send(newComment);
  });

  const deleteCommentSchema = DeleteOneQuery();
  fastify.delete('/:id', deleteCommentSchema, async (request: DeleteCommentRequest, reply) => {
    const { id } = request.params;
    await CommentService.deleteCommentById(id);
    reply.send({});
  });

  next();
}
