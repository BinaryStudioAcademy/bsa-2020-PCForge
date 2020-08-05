import { FastifyRequest } from 'fastify';

export type PostRamTypeRequest = FastifyRequest<{
  Body: { name: string };
}>;

export type GetRamTypeRequest = FastifyRequest<{
  Params: { id: string };
}>;
