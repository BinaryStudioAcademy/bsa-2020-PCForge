import { FastifyInstance } from 'fastify';
import { FastifyNext, FastifyOptions } from './fastifyTypes';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  //Example how to use image Upload
  const { UploadImageService } = fastify.services;
  const singleUpload = UploadImageService.single('image');

  fastify.post('/image', { preHandler: singleUpload }, (request, response) => {
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