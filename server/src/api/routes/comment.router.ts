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
import {
  getMultipleQuery,
  getOneQuery,
  createOneQuery,
  updateOneQuery,
  deleteOneQuery,
} from '../../helpers/swagger.helper';
import { ICommentFilter } from '../../data/repositories/filters/comment.filter';
import { userRequestMiddleware } from '../middlewares/userRequest.middlewarre';
import { allowForAuthorized, allowForAdmin } from '../middlewares/allowFor.middleware';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { CommentService } = fastify.services;
  const preHandler = userRequestMiddleware(fastify);
  fastify.addHook('preHandler', preHandler);

  const commentMiddleware = CommentMiddleware(fastify);

  const getAllSchema = getMultipleQuery(GetAllComments, ICommentFilter.schema);
  fastify.get('/', getAllSchema, async (request: GetAllCommentsRequest, reply) => {
    allowForAuthorized(request);
    const comments = await CommentService.getAllComments(request.query);
    reply.send(comments);
  });

  const getOneSchema = getOneQuery(CommentSchema);
  fastify.get('/:id', getOneSchema, async (request: GetOneCommentRequest, reply) => {
    allowForAuthorized(request);
    const { id } = request.params;
    const comment = await CommentService.getCommentById(id);
    reply.send(comment);
  });

  const createOneSchema = createOneQuery(UpdateCommentSchema, CommentSchema);
  fastify.post('/', { ...createOneSchema }, async (request: PostCommentRequest, reply) => {
    allowForAdmin(request);
    const comment = await CommentService.createComment(request.body, commentMiddleware);
    reply.send(comment);
  });

  const updateOneSchema = updateOneQuery(UpdateCommentSchema, CommentSchema);
  fastify.put('/:id', updateOneSchema, async (request: PutCommentRequest, reply) => {
    allowForAdmin(request);
    const { id } = request.params;
    const newComment = await CommentService.updateCommentById({ id, data: request.body }, commentMiddleware);
    reply.send(newComment);
  });

  const deleteOneSchema = deleteOneQuery(CommentSchema);
  fastify.delete('/:id', deleteOneSchema, async (request: DeleteCommentRequest, reply) => {
    allowForAdmin(request);
    const { id } = request.params;
    const comment = await CommentService.deleteCommentById(id);
    reply.send(comment);
  });

  next();
}
