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
import {
  getMultipleQuery,
  getOneQuery,
  createOneQuery,
  updateOneQuery,
  deleteOneQuery,
} from '../../helpers/swagger.helper';
import { IFilter } from '../../data/repositories/filters/base.filter';
import { userRequestMiddleware } from '../middlewares/userRequest.middlewarre';
import { allowForAuthorized, allowForAdmin } from '../middlewares/allowFor.middleware';
import { decodeName } from '../middlewares/decodeName.middleware';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { PowerSupplyService, HardwareService } = fastify.services;
  const preHandler = userRequestMiddleware(fastify);
  fastify.addHook('preHandler', preHandler);

  const getAllSchema = getMultipleQuery(GetAllPowerSuppliesResponse, IFilter.schema);
  fastify.get('/', getAllSchema, async (request: GetOnePowerSuppliesRequest, reply) => {
    allowForAuthorized(request);
    decodeName(request);
    // const powerSupplies = await HardwareService.getTopPowerSupplies(request.query);
    const powerSupplies = await PowerSupplyService.getAllPowerSupplies(request.query);
    reply.send(powerSupplies);
  });

  const getOneSchema = getOneQuery(PowerSupplySchema);
  fastify.get('/:id', getOneSchema, async (request: GetOnePowerSupplyRequest, reply) => {
    allowForAuthorized(request);
    const { id } = request.params;
    const powerSupply = await PowerSupplyService.getPowerSupplyById(id);
    reply.send(powerSupply);
  });

  const createOneSchema = createOneQuery(CreatePowerSupplySchema, PowerSupplySchema);
  fastify.post('/', createOneSchema, async (request: PostPowerSupplyRequest, reply) => {
    allowForAdmin(request);
    const powerSupply = await PowerSupplyService.createPowerSupply(request.body);
    reply.send(powerSupply);
  });

  const updateOneSchema = updateOneQuery(UpdatePowerSupplySchema, PowerSupplySchema);
  fastify.put('/:id', updateOneSchema, async (request: PutPowerSupplyRequest, reply) => {
    allowForAdmin(request);
    const { id } = request.params;
    const newPowerSupply = await PowerSupplyService.updatePowerSupplyById({ id, data: request.body });
    reply.send(newPowerSupply);
  });

  const deleteOneSchema = deleteOneQuery(PowerSupplySchema);
  fastify.delete('/:id', deleteOneSchema, async (request: DeletePowerSupplyRequest, reply) => {
    allowForAdmin(request);
    const { id } = request.params;
    const powerSupply = await PowerSupplyService.deletePowerSupplyById(id);
    reply.send(powerSupply);
  });

  next();
}
