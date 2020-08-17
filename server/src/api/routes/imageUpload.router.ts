import { FastifyInstance } from 'fastify';
import { FastifyNext, FastifyOptions } from './fastifyTypes';
import { UploadImageSchema, UploadImageRequest } from './imageUploader.schema';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  //Example how to use image Upload
  const { UploadImageService } = fastify.services;
  const singleUpload = UploadImageService.single('image');

  fastify.post(
    '/image',
    { preHandler: singleUpload, ...UploadImageSchema },
    (request: UploadImageRequest, response) => {
      singleUpload(request, response, (error) => {
        if (error) {
          response.send({ error: error });
        }
        // If File not found
        if (request.body.file === undefined) {
          response.send({ error: 'Error: No File Selected' });
        }
        response.send({ imageUrl: request.body.file.location });
      });
    }
  );

  next();
}
