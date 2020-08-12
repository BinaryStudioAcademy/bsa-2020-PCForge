import { FastifyRequest } from 'fastify';
import { PowerSupplyCreationAttributes } from '../../data/models/powersupply';
import { IFilter } from '../../data/repositories/filters/base.filter';

export type GetOnePowerSuppliesRequest = FastifyRequest<{
  Querystring: IFilter;
}>;

export type GetOnePowerSupplyRequest = FastifyRequest<{
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
