import { FastifyRequest } from 'fastify';
import { CommentCreationAttributes } from '../../data/models/comment';
import { ICommentFilter } from '../../data/repositories/filters/comment.filter';
import { SwaggerSchema } from '../../data/models/swaggerSchema';

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

export const CommentSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: false,
    },
    commentableType: {
      type: 'string',
      example: 'game',
      enum: ['news', 'game', 'setup'],
      nullable: false,
    },
    userId: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: false,
    },
    commentableId: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: false,
    },
    value: {
      type: 'string',
      example: 'Comment body goes here...',
      nullable: false,
    },
    createdAt: {
      type: 'string',
      nullable: false,
      format: 'date-time',
    },
    updatedAt: {
      type: 'string',
      nullable: false,
      format: 'date-time',
    },
  },
};

export const GetAllComments: SwaggerSchema = {
  type: 'object',
  properties: {
    meta: {
      type: 'object',
      properties: {
        globalCount: {
          type: 'integer',
          nullable: false,
        },
        countAfterFiltering: {
          type: 'integer',
          nullable: false,
        },
      },
    },
    data: {
      type: 'array',
      items: CommentSchema,
    },
  },
};

export const CreateCommentSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    commentableType: {
      type: 'string',
      example: 'game',
      enum: ['news', 'game', 'setup'],
      nullable: false,
    },
    userId: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: false,
    },
    commentableId: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: false,
    },
    value: {
      type: 'string',
      example: 'Comment body goes here...',
      nullable: false,
    },
  },
};

export const UpdateCommentSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    commentableType: {
      type: 'string',
      example: 'game',
      enum: ['news', 'game', 'setup'],
      nullable: true,
    },
    userId: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: true,
    },
    commentableId: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: true,
    },
    value: {
      type: 'string',
      example: 'Comment body goes here...',
      nullable: true,
    },
  },
};
