import { FastifyRequest } from 'fastify';

export type GetAllMotherboardsRequest = FastifyRequest<{
  Params: { id: string };
  Querystring: {
    socketId: string;
    from: number;
    count: number;
  };
}>;

export type GetOneMotherboardRequest = FastifyRequest<{
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