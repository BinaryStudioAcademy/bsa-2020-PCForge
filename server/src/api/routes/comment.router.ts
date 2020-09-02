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
  DetailedCommentSchema,
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
import { allowForAuthorized, allowForAdmin, allowForVerified } from '../middlewares/allowFor.middleware';

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

  const getOneSchema = getOneQuery(DetailedCommentSchema);
  fastify.get('/:id', getOneSchema, async (request: GetOneCommentRequest, reply) => {
    allowForAuthorized(request);
    const { id } = request.params;
    const comment = await CommentService.getCommentById(id);
    reply.send(comment);
  });

  const createOneSchema = createOneQuery(UpdateCommentSchema, CommentSchema);
  fastify.post('/', { ...createOneSchema }, async (request: PostCommentRequest, reply) => {
    allowForVerified(request);
    console.log('somment', request.body);
    request.body.userId = request.user.id;
    const comment = await CommentService.createComment(request.body, commentMiddleware);
    reply.send(comment);
  });

  const updateOneSchema = updateOneQuery(UpdateCommentSchema, CommentSchema);
  fastify.put('/:id', updateOneSchema, async (request: PutCommentRequest, reply) => {
    allowForVerified(request);
    const { id } = request.params;
    request.body.userId = request.user.id;
    const newComment = await CommentService.updateCommentById(
      { id, data: request.body },
      commentMiddleware,
      request.user
    );
    reply.send(newComment);
  });

  const deleteOneSchema = deleteOneQuery(CommentSchema);
  fastify.delete('/:id', deleteOneSchema, async (request: DeleteCommentRequest, reply) => {
    allowForVerified(request);
    const { id } = request.params;
    const comment = await CommentService.deleteCommentById(id);
    reply.send(comment);
  });

  next();
}
