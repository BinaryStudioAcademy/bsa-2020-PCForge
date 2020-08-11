import { FastifyRequest } from 'fastify';
import { PowerSupplyCreationAttributes } from '../../data/models/powersupply';

export type GetPowerSupplyRequest = FastifyRequest<{
  Params: { id: string };
}>;

export type PostPowerSupplyRequest = FastifyRequest<{
  Body: PowerSupplyCreationAttributes;
}>;

export type PutPowerSupplyRequest = FastifyRequest<{
  Params: { id: string };
  Body: PowerSupplyCreationAttributes;
}>;

export type DeletePowerSupplyRequest = FastifyRequest<{
  Params: { id: string };
}>;
