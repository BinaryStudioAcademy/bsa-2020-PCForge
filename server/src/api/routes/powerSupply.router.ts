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

  const getAllSchema = GetMultipleQuery(GetAllPowerSuppliesResponse, IFilter.schema);
  fastify.get('/', getAllSchema, async (request: GetOnePowerSuppliesRequest, reply) => {
    const powerSupplies = await PowerSupplyService.getAllPowerSupplies(request.query);
    reply.send(powerSupplies);
  });

  const getOneSchema = GetOneQuery(PowerSupplySchema);
  fastify.get('/:id', getOneSchema, async (request: GetOnePowerSupplyRequest, reply) => {
    const { id } = request.params;
    const PowerSupply = await PowerSupplyService.getPowerSupplyById(id);
    reply.send(PowerSupply);
  });

  const createOneSchema = CreateOneQuery(CreatePowerSupplySchema, PowerSupplySchema);
  fastify.post('/', createOneSchema, async (request: PostPowerSupplyRequest, reply) => {
    const PowerSupply = await PowerSupplyService.createPowerSupply(request.body);
    reply.send(PowerSupply);
  });

  const updateOneSchema = UpdateOneQuery(UpdatePowerSupplySchema, PowerSupplySchema);
  fastify.put('/:id', updateOneSchema, async (request: PutPowerSupplyRequest, reply) => {
    const { id } = request.params;
    const newPowerSupply = await PowerSupplyService.updatePowerSupplyById({ id, data: request.body });
    reply.send(newPowerSupply);
  });

  const deleteOneSchema = DeleteOneQuery();
  fastify.delete('/:id', deleteOneSchema, async (request: DeletePowerSupplyRequest, reply) => {
    const { id } = request.params;
    await PowerSupplyService.deletePowerSupplyById(id);
    reply.send({});
  });

  next();
}
