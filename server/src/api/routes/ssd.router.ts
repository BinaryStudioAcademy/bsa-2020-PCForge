import { FastifyInstance } from 'fastify';
import { FastifyNext, FastifyOptions } from './fastifyTypes';
import {
  PostSsdRequest,
  GetOneSsdRequest,
  PutSsdRequest,
  DeleteSsdRequest,
  GetAllSsdsRequest,
  GetAllSsdsResponse,
  SsdSchema,
  CreateSsdSchema,
  UpdateSsdSchema,
} from './ssd.schema';
import {
  GetMultipleQuery,
  GetOneQuery,
  CreateOneQuery,
  UpdateOneQuery,
  DeleteOneQuery,
} from '../../helpers/swagger.helper';
import { ISsdFilter } from '../../data/repositories/filters/ssd.filter';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { SsdService } = fastify.services;

  const getAllSchema = GetMultipleQuery(GetAllSsdsResponse, ISsdFilter.schema);
  fastify.get('/', getAllSchema, async (request: GetAllSsdsRequest, reply) => {
    const ssds = await SsdService.getAllSsds(request.query);
    reply.send(ssds);
  });

  const getOneSchema = GetOneQuery(SsdSchema);
  fastify.get('/:id', getOneSchema, async (request: GetOneSsdRequest, reply) => {
    const { id } = request.params;
    const ssd = await SsdService.getSsdById(id);
    reply.send(ssd);
  });

  const createOneSchema = CreateOneQuery(CreateSsdSchema, SsdSchema);
  fastify.post('/', createOneSchema, async (request: PostSsdRequest, reply) => {
    const ssd = await SsdService.createSsd(request.body);
    reply.send(ssd);
  });

  const updateOneSchema = UpdateOneQuery(UpdateSsdSchema, SsdSchema);
  fastify.put('/:id', updateOneSchema, async (request: PutSsdRequest, reply) => {
    const { id } = request.params;
    const newSsd = await SsdService.updateSsdById({ id, data: request.body });
    reply.send(newSsd);
  });

  const deleteOneSchema = DeleteOneQuery();
  fastify.delete('/:id', deleteOneSchema, async (request: DeleteSsdRequest, reply) => {
    const { id } = request.params;
    await SsdService.deleteSsdById({ id });
    reply.send({});
  });

  next();
}
