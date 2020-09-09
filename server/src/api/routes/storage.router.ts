import { FastifyInstance } from 'fastify';
import { FastifyNext, FastifyOptions } from './fastifyTypes';
import { GetAllStoragesRequest, GetAllStoragesResponse } from './storage.schema';
import { getMultipleQuery } from '../../helpers/swagger.helper';
import { ISsdFilter } from '../../data/repositories/filters/ssd.filter';
import { userRequestMiddleware } from '../middlewares/userRequest.middlewarre';
import { allowForAuthorized } from '../middlewares/allowFor.middleware';
import { IStorageFilter } from '../../data/repositories/filters/storage.filter';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { HardwareService } = fastify.services;

  const preHandler = userRequestMiddleware(fastify);
  fastify.addHook('preHandler', preHandler);

  const getAllSchema = getMultipleQuery(GetAllStoragesResponse, IStorageFilter.schema);
  fastify.get('/', getAllSchema, async (request: GetAllStoragesRequest, reply) => {
    allowForAuthorized(request);
    const storages = await HardwareService.getTopStorages(request.query);
    reply.send(storages);
  });

  next();
}
