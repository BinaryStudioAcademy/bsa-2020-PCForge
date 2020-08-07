import { FastifyRequest } from 'fastify';

export type GetMotherboardRequest = FastifyRequest<{
  Params: { id: string };
}>;

export type PostMotherboardRequest = FastifyRequest<{
  Body: {
    name: string;
    socketId: number;
    ramTypeId: number;
  };
}>;

export type PutMotherboardRequest = FastifyRequest<{
  Params: { id: string };
  Body: {
    name: string;
    socketId: number;
    ramTypeId: number;
  };
}>;

export type DeleteMotherboardRequest = FastifyRequest<{
  Params: { id: string };
}>;
