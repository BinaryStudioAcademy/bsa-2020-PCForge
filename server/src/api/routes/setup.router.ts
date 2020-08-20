import { FastifyInstance } from 'fastify';
import { FastifyDone, FastifyOptions } from './fastifyTypes';
import {
  GetSetupsRequest,
  GetSetupRequest,
  PostSetupRequest,
  DeleteSetupRequest,
  PutSetupRequest,
  SetupSchema,
  CreateSetupSchema,
  UpdateSetupSchema,
  GetAllSetupsResponse,
  DetailedSetupSchema,
} from './setup.schema';
import { CreateOneQuery, UpdateOneQuery, GetOneQuery, GetMultipleQuery, DeleteOneQuery } from '../../helpers/swagger.helper';
import { SetupMiddleware } from '../middlewares/setup.middleware';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyDone): void {
  const { SetupService } = fastify.services;

  const setupMiddleware = SetupMiddleware(fastify);

  const getAllSchema = GetMultipleQuery(GetAllSetupsResponse);
  fastify.get('/', getAllSchema, async (request: GetSetupsRequest, reply) => {
    const setups = await SetupService.getAllSetups();
    reply.send(setups);
  });

  const getOneSchema = GetOneQuery(DetailedSetupSchema);
  fastify.get('/:id', getOneSchema, async function (request: GetSetupRequest) {
    const { id } = request.params;
    const setup = await SetupService.getSetupById(id);
    return setup;
  });

  const createOneSchema = CreateOneQuery(CreateSetupSchema, SetupSchema);
  fastify.post('/', createOneSchema, async (request: PostSetupRequest, reply) => {
    const setup = await SetupService.createSetup(request.body, setupMiddleware);
    reply.send(setup);
  });

  const updateOneSchema = UpdateOneQuery(UpdateSetupSchema, SetupSchema);
  fastify.put('/:id', updateOneSchema, async (request: PutSetupRequest, reply) => {
    const { id } = request.params;
    const setup = await SetupService.updateSetupById({id, data: request.body}, setupMiddleware);
    reply.send(setup);
  });

  const deleteOneSchema = DeleteOneQuery();
  fastify.delete('/:id', deleteOneSchema, async (request: DeleteSetupRequest, reply) => {
    const { id } = request.params;
    await SetupService.deleteSetupById(id);
    reply.send({});
  });

  next();
}
