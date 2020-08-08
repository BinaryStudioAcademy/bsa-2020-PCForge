import { FastifyRequest } from 'fastify';

export type GetSocketRequest = FastifyRequest<{
  Params: { id: string };
}>;

export type PostSocketRequest = FastifyRequest<{
  Body: {
    name: string;
  };
}>;

export type PutSocketRequest = FastifyRequest<{
  Params: { id: string };
  Body: {
    name: string;
  };
}>;

export type DeleteSocketRequest = FastifyRequest<{
  Params: { id: string };
}>;
