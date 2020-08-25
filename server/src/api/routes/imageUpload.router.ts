import { FastifyInstance } from 'fastify';
import { FastifyNext, FastifyOptions } from './fastifyTypes';
import { UploadImageSchema, UploadRequest } from './imageUploader.schema';
import { userRequestMiddleware } from '../middlewares/userRequest.middlewarre';
import { allowForAuthorized } from '../middlewares/allowFor.middleware';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  //Example how to use image Upload
  const { UploadImageService } = fastify.services;
  const singleUpload = UploadImageService.single('image');
  const preHandler = userRequestMiddleware(fastify);
  fastify.addHook('preHandler', preHandler);

  fastify.post('/image', { preHandler: singleUpload, ...UploadImageSchema }, (request: UploadRequest, response) => {
    allowForAuthorized(request);
    singleUpload(request, response, (error) => {
      if (error) {
        response.send({ error: error });
      }
      // If File not found
      if (request.file === undefined) {
        response.send({ error: 'Error: No File Selected' });
      }
      response.send({ imageUrl: request.file.location });
    });
  });

  next();
}
