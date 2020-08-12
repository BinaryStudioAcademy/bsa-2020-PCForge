import { FastifyInstance } from 'fastify';
import { FastifyNext, FastifyOptions } from './fastifyTypes';
import {
  PostMotherboardRequest,
  PutMotherboardRequest,
  DeleteMotherboardRequest,
  GetAllMotherboardsRequest,
  GetOneMotherboardRequest,
} from './motherboard.schema';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { MotherboardService } = fastify.services;

  fastify.get('/', {}, async (request: GetAllMotherboardsRequest, reply) => {
    const motherboards = await MotherboardService.getAllMotherboards(request.query);
    reply.send(motherboards);
  });

  fastify.get('/:id', {}, async (request: GetOneMotherboardRequest, reply) => {
    const { id } = request.params;
    const motherboard = await MotherboardService.getMotherboardById(id);
    reply.send(motherboard);
  });

  fastify.post('/', {}, async (request: PostMotherboardRequest, reply) => {
    const motherboard = await MotherboardService.createMotherboard(request.body);
    reply.send(motherboard);
  });

  fastify.put('/:id', {}, async (request: PutMotherboardRequest, reply) => {
    const { id } = request.params;
    const newMotherboard = await MotherboardService.updateMotherboardById({ id, data: request.body });
    reply.send(newMotherboard);
  });

  fastify.delete('/:id', {}, async (request: DeleteMotherboardRequest, reply) => {
    const { id } = request.params;
    await MotherboardService.deleteMotherboardById(id);
    reply.send({});
  });

  next();
}
