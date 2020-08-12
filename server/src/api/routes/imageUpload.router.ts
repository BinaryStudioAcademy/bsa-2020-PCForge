import { FastifyInstance } from 'fastify';
import { FastifyNext, FastifyOptions } from './fastifyTypes';
import { resolve } from 'bluebird';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { UploadImageService } = fastify.services;
  const singleUpload = UploadImageService.single('image');

  fastify.post('/image', { preHandler: singleUpload }, (request, response) => {
    singleUpload(request, response, (error) => {
      if (error) {
        console.log('errors', error);
        response.send({ error: error });
      } else {
        // If File not found
        if (request.file === undefined) {
          console.log('Error: No File Selected!');
          response.send({ error: 'Error: No File Selected' });
        } else {
          // If Success
          const imageName = request.file.key;
          const imageLocation = request.file.location;
          // Save the file name into database into profile model
          response.send({
            image: imageName,
            location: imageLocation,
          });
        }
      }
      response.send({ imageUrl: request.file.location });
    });
  });

  next();
}
