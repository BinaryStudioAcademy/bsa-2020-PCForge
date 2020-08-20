/* eslint-disable @typescript-eslint/no-explicit-any */
import { FastifyRequest } from 'fastify';
import { SwaggerSchema } from '../../data/models/swaggerSchema';

const UploadImageRequest: SwaggerSchema = {};

const UploadImageResponse: SwaggerSchema = {
  type: 'object',
  properties: {
    imageUrl: {
      type: 'string',
      nullable: false,
      example: 'http://image-server.com/route',
    },
  },
};

export const UploadImageSchema = {
  schema: {
    body: {},
    response: {
      200: UploadImageResponse,
    },
  },
};
