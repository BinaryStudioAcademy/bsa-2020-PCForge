import { FastifyRequest } from 'fastify';
import { SetupAttributes } from '../../data/models/setup';

export type GetSetupsRequest = FastifyRequest;

export type GetSetupRequest = FastifyRequest<{
  Params: { id: string };
}>;

export type PostSetupRequest = FastifyRequest<{
  Body: {
    title: string;
    description: string;
    image: string;
    authorId: number;
  };
}>;

export type PutSetupRequest = FastifyRequest<{
  Params: { id: string };
  Body: {
    title: string;
    description: string;
    image: string;
    authorId: number;
  };
}>;

export type DeleteSetupRequest = FastifyRequest<{
  Params: { id: string };
}>;
