import { FastifyInstance } from 'fastify';
import { FastifyNext, FastifyOptions } from './fastifyTypes';
import {
  PostPowerSupplyRequest,
  GetPowerSupplyRequest,
  PutPowerSupplyRequest,
  DeletePowerSupplyRequest,
} from './powerSupply.schema';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { PowerSupplyService } = fastify.services;

  fastify.get('/', {}, async (request, reply) => {
    const powerSupplies = await PowerSupplyService.getAllPowerSupplies();
    reply.send(powerSupplies);
  });

  fastify.get('/:id', {}, async (request: GetPowerSupplyRequest, reply) => {
    const { id } = request.params;
    const PowerSupply = await PowerSupplyService.getPowerSupplyById(id);
    reply.send(PowerSupply);
  });

  fastify.post('/', {}, async (request: PostPowerSupplyRequest, reply) => {
    const PowerSupply = await PowerSupplyService.createPowerSupply(request.body);
    reply.send(PowerSupply);
  });

  fastify.put('/:id', {}, async (request: PutPowerSupplyRequest, reply) => {
    const { id } = request.params;
    const newPowerSupply = await PowerSupplyService.updatePowerSupplyById({ id, data: request.body });
    reply.send(newPowerSupply);
  });

  fastify.delete('/:id', {}, async (request: DeletePowerSupplyRequest, reply) => {
    const { id } = request.params;
    await PowerSupplyService.deletePowerSupplyById({ id });
    reply.send({});
  });

  next();
}
