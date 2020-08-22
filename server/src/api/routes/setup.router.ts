import { FastifyInstance } from 'fastify';
import { FastifyDone, FastifyOptions } from './fastifyTypes';
import {
  GetSetupsRequest,
  GetSetupRequest,
  PostSetupRequest,
  DeleteSetupRequest,
  PutSetupRequest,
  CreateSetupSchema,
  UpdateSetupSchema,
  GetAllSetupsResponse,
  DetailedSetupSchema,
} from './setup.schema';

import { SetupMiddleware } from '../middlewares/setup.middleware';
import { userRequestMiddleware } from '../middlewares/userRequest.middlewarre';
import {
  CreateOneQuery,
  UpdateOneQuery,
  GetOneQuery,
  GetMultipleQuery,
  DeleteOneQuery,
} from '../../helpers/swagger.helper';
import { ISetupFilter } from '../../data/repositories/filters/setup.filter';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyDone): void {
  const { SetupService } = fastify.services;

  const setupMiddleware = SetupMiddleware(fastify);

  const getAllSchema = GetMultipleQuery(GetAllSetupsResponse, ISetupFilter.schema);
  fastify.get('/', getAllSchema, async (request: GetSetupsRequest, reply) => {
    const setups = await SetupService.getAllSetups(request.query);
    reply.send(setups);
  });

  const getOneSchema = GetOneQuery(DetailedSetupSchema);
  fastify.get('/:id', getOneSchema, async function (request: GetSetupRequest) {
    const { id } = request.params;
    const setup = await SetupService.getSetupById(id);
    return setup;
  });

  const createOneSchema = CreateOneQuery(CreateSetupSchema, DetailedSetupSchema);
  fastify.post(
    '/',
    { preHandler: userRequestMiddleware(fastify), ...createOneSchema },
    async (request: PostSetupRequest, reply) => {
      request.body.authorId = request.user.id;
      const data = { ...request.body };
      const setup = await SetupService.createSetup(data, setupMiddleware);
      reply.send(setup);
    }
  );

  const updateOneSchema = UpdateOneQuery(UpdateSetupSchema, DetailedSetupSchema);
  fastify.put('/:id', updateOneSchema, async (request: PutSetupRequest, reply) => {
    const { id } = request.params;
    const setup = await SetupService.updateSetupById({ id, data: request.body }, setupMiddleware);
    reply.send(setup);
  });

  const deleteOneSchema = DeleteOneQuery(DetailedSetupSchema);
  fastify.delete('/:id', deleteOneSchema, async (request: DeleteSetupRequest, reply) => {
    const { id } = request.params;
    const setup = await SetupService.deleteSetupById(id);
    reply.send(setup);
  });

  next();
}
