import { FastifyInstance } from 'fastify';
import { FastifyDone, FastifyOptions } from './fastifyTypes';
import {
  GetSetupsRequest,
  GetSetupRequest,
  PostSetupRequest,
  DeleteSetupRequest,
  PutSetupRequest,
} from './setup.schema';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyDone): void {
  const { SetupService } = fastify.services;

  fastify.get('/', {}, async (request: GetSetupsRequest, reply) => {
    const setups = await SetupService.getAllSetups();
    reply.send(setups);
  });

  fastify.get('/:id', {}, async function (request: GetSetupRequest) {
    const { id } = request.params;
    const setup = SetupService.getSetupById(id);
    return setup;
  });

  fastify.post('/', {}, async (request: PostSetupRequest, reply) => {
    const data = { ...request.body };
    data.authorId = 1;
    const setup = await SetupService.createSetup(data);
    reply.send(setup);
  });

  fastify.put('/:id', {}, async (request: PutSetupRequest, reply) => {
    const { id } = request.params;
    const setup = await SetupService.updateSetupById(id, request.body);
    reply.send(setup);
  });

  fastify.delete('/:id', {}, async (request: DeleteSetupRequest, reply) => {
    const { id } = request.params;
    await SetupService.deleteSetupById(id);
    reply.send({});
  });

  next();
}
