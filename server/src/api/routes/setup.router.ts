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
  ForkSetupSchema,
  ForkSetupRequest,
} from './setup.schema';

import { SetupMiddleware } from '../middlewares/setup.middleware';
import { userRequestMiddleware } from '../middlewares/userRequest.middlewarre';
import {
  createOneQuery,
  updateOneQuery,
  getOneQuery,
  getMultipleQuery,
  deleteOneQuery,
} from '../../helpers/swagger.helper';
import { ISetupFilter } from '../../data/repositories/filters/setup.filter';
import { allowForAuthorized } from '../middlewares/allowFor.middleware';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyDone): void {
  const { SetupService } = fastify.services;

  const setupMiddleware = SetupMiddleware(fastify);
  const preHandler = userRequestMiddleware(fastify);
  fastify.addHook('preHandler', preHandler);

  const getAllSchema = getMultipleQuery(GetAllSetupsResponse, ISetupFilter.schema);
  fastify.get('/', getAllSchema, async (request: GetSetupsRequest, reply) => {
    allowForAuthorized(request);
    const setups = await SetupService.getAllSetups(request.query, request.user.id);
    reply.send(setups);
  });

  const getOneSchema = getOneQuery(DetailedSetupSchema, undefined);
  fastify.get('/:id', getOneSchema, async function (request: GetSetupRequest) {
    allowForAuthorized(request);
    const { id } = request.params;
    const setup = await SetupService.getSetupById(id, request.user.id);
    return setup;
  });

  const createOneSchema = createOneQuery(CreateSetupSchema, DetailedSetupSchema);
  fastify.post('/', createOneSchema, async (request: PostSetupRequest, reply) => {
    allowForAuthorized(request);
    request.body.authorId = request.user.id;
    const data = { ...request.body };
    const setup = await SetupService.createSetup(data, setupMiddleware);
    reply.send(setup);
  });

  const updateOneSchema = updateOneQuery(UpdateSetupSchema, DetailedSetupSchema);
  fastify.put('/:id', updateOneSchema, async (request: PutSetupRequest, reply) => {
    allowForAuthorized(request);
    request.body.authorId = request.user.id;
    const { id } = request.params;
    const setup = await SetupService.updateSetupById({ id, data: request.body }, setupMiddleware, request.user);
    reply.send(setup);
  });

  const deleteOneSchema = deleteOneQuery(DetailedSetupSchema);
  fastify.delete('/:id', deleteOneSchema, async (request: DeleteSetupRequest, reply) => {
    allowForAuthorized(request);
    const { id } = request.params;
    const setup = await SetupService.deleteSetupById(id, request.user);
    reply.send(setup);
  });

  const forkSchema = createOneQuery(ForkSetupSchema, DetailedSetupSchema);
  fastify.post('/forks', forkSchema, async (request: ForkSetupRequest, reply) => {
    allowForAuthorized(request);
    const forkedSetup = await SetupService.forkSetupById(request.body.setupId, request.user.id);
    reply.send(forkedSetup);
  });

  next();
}
