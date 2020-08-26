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

const makeDetailedSchema = () => {
  const schema: SwaggerSchema = JSON.parse(JSON.stringify(CommentSchema));
  schema.properties.user = UserSchema;
  return schema;
};

export const DetailedCommentSchema = makeDetailedSchema();

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
      items: DetailedCommentSchema,
    },
  },
};

export const CreateCommentSchema: SwaggerSchema = {
  type: 'object',
  required: ['commentableType', 'commentableId', 'value'],
  additionalProperties: false,
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
  required: ['commentableType', 'commentableId', 'value'],
  additionalProperties: false,
  properties: {
    commentableType: {
      type: 'string',
      minLength: 1,
      example: 'game',
      enum: ['news', 'game', 'setup'],
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
