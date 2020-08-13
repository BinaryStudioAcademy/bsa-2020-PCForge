import { FastifyRequest } from 'fastify';
import { CommentCreationAttributes } from '../../data/models/comment';
import { ICommentFilter } from '../../data/repositories/filters/comment.filter';

export type GetAllCommentsRequest = FastifyRequest<{
  Params: { id: string };
  Querystring: ICommentFilter;
}>;

export type GetOneCommentRequest = FastifyRequest<{
  Params: { id: string };
}>;

export type PostCommentRequest = FastifyRequest<{
  Body: CommentCreationAttributes;
}>;

export type PutCommentRequest = FastifyRequest<{
  Params: { id: string };
  Body: CommentCreationAttributes;
}>;

export type DeleteCommentRequest = FastifyRequest<{
  Params: { id: string };
}>;
