import { FastifyRequest } from 'fastify';
import { SwaggerSchema } from '../../data/models/swaggerSchema';

export type GetNewsRequest = FastifyRequest<{
  Params: { id: string };
}>;

export type PostNewsRequest = FastifyRequest<{
  Body: {
    title: string;
    content: string;
    image: string;
  };
}>;

export type PutNewsRequest = FastifyRequest<{
  Params: { id: string };
  Body: {
    title: string;
    content: string;
    image: string;
  };
}>;

export type DeleteNewsRequest = FastifyRequest<{
  Params: { id: string };
}>;

export const NewsSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: false,
    },
    title: {
      type: 'string',
      example: 'News title',
      nullable: false,
      minLength: 1,
    },
    content: {
      type: 'string',
      example: 'Long Text goes here',
      nullable: false,
      minLength: 1,
    },
    image: {
      type: 'string',
      nullable: false,
      example: 'http://image-server.com/route',
      minLength: 1,
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

export const GetAllNewsResponse: SwaggerSchema = {
  type: 'array',
  items: NewsSchema,
};

export const CreateNewsSchema: SwaggerSchema = {
  type: 'object',
  required: ['title', 'content', 'image'],
  properties: {
    title: {
      type: 'string',
      example: 'News title',
      maxLength: 50,
      nullable: false,
      minLength: 1,
    },
    content: {
      type: 'string',
      example: 'Text goes here...',
      nullable: false,
      minLength: 1,
    },
    image: {
      type: 'string',
      example: 'http://image-hosting.com/route',
      maxLength: 500,
      nullable: false,
      minLength: 1,
    },
  },
};

export const UpdateNewsSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    title: {
      type: 'string',
      example: 'News title',
      nullable: true,
      minLength: 1,
    },
    content: {
      type: 'string',
      example: 'Text goes here...',
      nullable: false,
      minLength: 1,
    },
    image: {
      type: 'string',
      example: 'http://image-hosting.com/route',
      nullable: true,
      minLength: 1,
    },
  },
};
