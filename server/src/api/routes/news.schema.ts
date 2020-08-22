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
      minLength: 1,
      example: 'News title',
      nullable: false,
    },
    content: {
      type: 'string',
      minLength: 1,
      example: 'Long Text goes here',
      nullable: false,
    },
    image: {
      type: 'string',
      minLength: 1,
      nullable: false,
      example: 'http://image-server.com/route',
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

export const GetAllNewsResponse: SwaggerSchema = {
  type: 'array',
  items: NewsSchema,
};

export const CreateNewsSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    title: {
      type: 'string',
      minLength: 1,
      example: 'News title',
      maxLength: 50,
      nullable: false,
    },
    content: {
      type: 'string',
      minLength: 1,
      example: 'Text goes here...',
      nullable: false,
    },
    image: {
      type: 'string',
      minLength: 1,
      example: 'http://image-hosting.com/route',
      maxLength: 50,
      nullable: false,
    },
  },
};

export const UpdateNewsSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    title: {
      type: 'string',
      minLength: 1,
      example: 'News title',
      nullable: true,
    },
    power: {
      type: 'integer',
      example: 750,
      nullable: true,
    },
    image: {
      type: 'string',
      minLength: 1,
      example: 'http://image-hosting.com/route',
      nullable: true,
    },
  },
};
