import { FastifyRequest } from 'fastify';
import { SetupAttributes } from '../../data/models/setup';

export type GetSetupsRequest = FastifyRequest;

export type GetSetupRequest = FastifyRequest<{
  Params: { id: string };
}>;

export type PostSetupRequest = FastifyRequest<{
  Body: SetupAttributes;
}>;

export type PutSetupRequest = FastifyRequest<{
  Params: { id: string };
  Body: SetupAttributes;
}>;

export type DeleteSetupRequest = FastifyRequest<{
  Params: { id: string };
}>;
