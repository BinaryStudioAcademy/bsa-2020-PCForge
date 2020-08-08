import { FastifyRequest } from 'fastify';

export type GetPowerSupplyRequest = FastifyRequest<{
  Params: { id: string };
}>;

export type PostPowerSupplyRequest = FastifyRequest<{
  Body: {
    name: string;
    power: number;
  };
}>;

export type PutPowerSupplyRequest = FastifyRequest<{
  Params: { id: string };
  Body: {
    name: string;
    power: number;
  };
}>;

export type DeletePowerSupplyRequest = FastifyRequest<{
  Params: { id: string };
}>;
