import { FastifyRequest } from 'fastify';
import { SwaggerSchema } from '../../data/models/swaggerSchema';

const UploadImageRequest: SwaggerSchema = {};

const UploadImageResponse: SwaggerSchema = {
  type: 'object',
  properties: {
    imageUrl: {
      type: 'string',
      minLength: 1,
      nullable: false,
      example: 'http://image-server.com/route',
    },
  },
};

export const UploadImageSchema = {
  schema: {
    // body: UploadImageRequest,
    response: {
      200: UploadImageResponse,
    },
  },
};
