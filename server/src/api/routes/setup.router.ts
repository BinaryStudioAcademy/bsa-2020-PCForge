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
} from './setup.schema';
import { CreateOneQuery, UpdateOneQuery, GetOneQuery, GetMultipleQuery, DeleteOneQuery } from '../../helpers/swagger.helper';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyDone): void {
  const { SetupService } = fastify.services;

  const swaggerGetAll = GetMultipleQuery(GetAllSetupsResponse);
  fastify.get('/', swaggerGetAll, async (request: GetSetupsRequest, reply) => {
    const setups = await SetupService.getAllSetups();
    reply.send(setups);
  });

  const swaggerGetOne = GetOneQuery(SetupSchema);
  fastify.get('/:id', swaggerGetOne, async function (request: GetSetupRequest) {
    const { id } = request.params;
    const setup = SetupService.getSetupById(id);
    return setup;
  });

  const swaggerCreateSchema = CreateOneQuery(CreateSetupSchema, SetupSchema);
  fastify.post('/', swaggerCreateSchema, async (request: PostSetupRequest, reply) => {
    const data = { ...request.body };
    data.authorId = 1;
    const setup = await SetupService.createSetup(data);
    reply.send(setup);
  });

  const swaggerUpdateSchema = UpdateOneQuery(UpdateSetupSchema, SetupSchema);
  fastify.put('/:id', swaggerUpdateSchema, async (request: PutSetupRequest, reply) => {
    const { id } = request.params;
    const setup = await SetupService.updateSetupById(id, request.body);
    reply.send(setup);
  });

  const deleteOneQuery = DeleteOneQuery();
  fastify.delete('/:id', deleteOneQuery, async (request: DeleteSetupRequest, reply) => {
    const { id } = request.params;
    await SetupService.deleteSetupById(id);
    reply.send({});
  });

  next();
}
