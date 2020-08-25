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
      minLength: 1,
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
