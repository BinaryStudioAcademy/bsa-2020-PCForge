import { FastifyRequest } from 'fastify';
import { CommentCreationAttributes } from '../../data/models/comment';
import { ICommentFilter } from '../../data/repositories/filters/comment.filter';
import { SwaggerSchema } from '../../data/models/swaggerSchema';
import { UserSchema } from './user.schema';
import { UserAttributes } from '../../data/models/user';

export type GetAllCommentsRequest = FastifyRequest<{
  Params: { id: string };
  Querystring: ICommentFilter;
}> & { user: UserAttributes };

export type GetOneCommentRequest = FastifyRequest<{
  Params: { id: string };
}> & { user: UserAttributes };

export type PostCommentRequest = FastifyRequest<{
  Body: CommentCreationAttributes;
}> & { user: UserAttributes };

export type PutCommentRequest = FastifyRequest<{
  Params: { id: string };
  Body: CommentCreationAttributes;
}> & { user: UserAttributes };

export type DeleteCommentRequest = FastifyRequest<{
  Params: { id: string };
}> & { user: UserAttributes };

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
      minLength: 1,
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
    user: UserSchema,
    commentableId: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: false,
    },
    value: {
      type: 'string',
      minLength: 1,
      example: 'Comment body goes here...',
      nullable: false,
    },
    createdAt: {
      type: 'string',
      minLength: 1,
      nullable: false,
      format: 'date-time',
    },
    updatedAt: {
      type: 'string',
      minLength: 1,
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
  required: ['commentableType', 'commentableId', 'userId', 'token', 'value'],
  properties: {
    commentableType: {
      type: 'string',
      minLength: 1,
      example: 'game',
      enum: ['news', 'game', 'setup'],
      nullable: false,
    },
    commentableId: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: false,
    },
    userId: {
      type: 'integer',
      nullable: false,
      example: 1,
      minimum: 1,
    },
    token: {
      type: 'string',
      minLength: 1,
      description: 'This is token that u get while loging in',
      nullable: false,
      example:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTc4NjQ5MjQsImV4cCI6MTU5Nzk1MTMyNH0.V8oy05YtI8elNEOl5Z_1hiCZFwD3Fq_ck1bZ4_UXI3o',
    },
    value: {
      type: 'string',
      minLength: 1,
      example: 'Comment body goes here...',
      nullable: false,
    },
  },
};

export const UpdateCommentSchema: SwaggerSchema = {
  type: 'object',
  required: ['commentableType', 'commentableId', 'userId', 'token', 'value'],
  properties: {
    commentableType: {
      type: 'string',
      minLength: 1,
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
      minLength: 1,
      example: 'Comment body goes here...',
      nullable: true,
    },
  },
};
