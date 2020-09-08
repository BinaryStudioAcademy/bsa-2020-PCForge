import { FastifyRequest } from 'fastify';
import { SwaggerSchema } from '../../data/models/swaggerSchema';
import { CommentRateCreationAttributes } from '../../data/models/commentRates';
import { ICommentRateFilter } from '../../data/repositories/filters/commentRate.filter';
import { UserAttributes } from '../../data/models/user';
import { UserSchema } from './user.schema';

export type GetAllCommentRatesRequest = FastifyRequest<{
  Params: { id: string };
  Querystring: ICommentRateFilter;
}> & { user: UserAttributes };

export type GetOneCommentRatesRequest = FastifyRequest<{
  Params: { id: string };
}> & { user: UserAttributes };

export type PostCommentRatesRequest = FastifyRequest<{
  Body: CommentRateCreationAttributes;
}> & { user: UserAttributes };

export const CommentRatesSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: false,
    },
    commentId: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: false,
    },
    userId: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: false,
    },
    isLiked: {
      type: 'boolean',
      example: true,
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

const createDetailedCommentRateSchema = (): SwaggerSchema => {
  const schema: SwaggerSchema = JSON.parse(JSON.stringify(CommentRatesSchema));
  schema.properties.user = UserSchema;
  return schema;
};

export const DetailedCommentRateSchema = createDetailedCommentRateSchema();

export const GetAllCommentRatesSchema: SwaggerSchema = {
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
      items: DetailedCommentRateSchema,
    },
  },
};

export const CreateCommentRateSchema: SwaggerSchema = {
  type: 'object',
  required: ['commentId', 'isLiked'],
  properties: {
    commentId: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: false,
    },
    isLiked: {
      type: 'boolean',
      example: true,
      nullable: false,
    },
  },
};
