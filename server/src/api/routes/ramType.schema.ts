import { FastifyRequest } from 'fastify';

export type GetRamTypeRequest = FastifyRequest<{
  Params: { id: string };
}>;

export type PostRamTypeRequest = FastifyRequest<{
  Body: { name: string };
}>;

export type PutRamTypeRequest = FastifyRequest<{
  Params: { id: string };
  Body: { name: string };
}>;

export type DeleteRamTypeRequest = FastifyRequest<{
  Params: { id: string };
}>;
