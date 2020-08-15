import { FastifyInstance } from 'fastify';
import { FastifyNext, FastifyOptions } from './fastifyTypes';
import {
  PostPowerSupplyRequest,
  GetOnePowerSupplyRequest,
  PutPowerSupplyRequest,
  DeletePowerSupplyRequest,
  GetOnePowerSuppliesRequest,
  GetAllPowerSuppliesResponse,
  PowerSupplySchema,
  CreatePowerSupplySchema,
  UpdatePowerSupplySchema,
} from './powerSupply.schema';
import { GetMultipleQuery, GetOneQuery, CreateOneQuery, UpdateOneQuery, DeleteOneQuery } from '../../helpers/swagger.helper';
import { IFilter } from '../../data/repositories/filters/base.filter';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { PowerSupplyService } = fastify.services;

  const getAll = GetMultipleQuery(GetAllPowerSuppliesResponse, IFilter.schema);
  fastify.get('/', getAll, async (request: GetOnePowerSuppliesRequest, reply) => {
    const powerSupplies = await PowerSupplyService.getAllPowerSupplies(request.query);
    reply.send(powerSupplies);
  });

  const getOne = GetOneQuery(PowerSupplySchema);
  fastify.get('/:id', getOne, async (request: GetOnePowerSupplyRequest, reply) => {
    const { id } = request.params;
    const PowerSupply = await PowerSupplyService.getPowerSupplyById(id);
    reply.send(PowerSupply);
  });

  const createOne = CreateOneQuery(CreatePowerSupplySchema, PowerSupplySchema);
  fastify.post('/', createOne, async (request: PostPowerSupplyRequest, reply) => {
    const PowerSupply = await PowerSupplyService.createPowerSupply(request.body);
    reply.send(PowerSupply);
  });

  const updateOne = UpdateOneQuery(UpdatePowerSupplySchema, PowerSupplySchema);
  fastify.put('/:id', updateOne, async (request: PutPowerSupplyRequest, reply) => {
    const { id } = request.params;
    const newPowerSupply = await PowerSupplyService.updatePowerSupplyById({ id, data: request.body });
    reply.send(newPowerSupply);
  });

  const deleteOne = DeleteOneQuery();
  fastify.delete('/:id', deleteOne, async (request: DeletePowerSupplyRequest, reply) => {
    const { id } = request.params;
    await PowerSupplyService.deletePowerSupplyById(id);
    reply.send({});
  });

  next();
}
