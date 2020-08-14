import { FastifyRequest } from 'fastify';
import { SetupCreationAttributes } from '../../data/models/setup';

export type GetSetupsRequest = FastifyRequest;

export type GetSetupRequest = FastifyRequest<{
  Params: { id: string };
}>;

export type PostSetupRequest = FastifyRequest<{
  Body: SetupCreationAttributes;
}>;

export type PutSetupRequest = FastifyRequest<{
  Params: { id: string };
  Body: SetupCreationAttributes;
}>;

export type DeleteSetupRequest = FastifyRequest<{
  Params: { id: string };
}>;
