import { FastifyRequest } from 'fastify';

export type GetOneRamRequest = FastifyRequest<{
  Params: { id: string };
}>;

export type GetAllRamsRequest = FastifyRequest<{
  Querystring: {
    typeId: string;
    from: number;
    count: number;
  };
}>;

export type PostRamRequest = FastifyRequest<{
  Body: {
    name: string;
    memorySize: number;
    frequency: number;
    typeId: number;
    power: number;
  };
}>;

export type PutRamRequest = FastifyRequest<{
  Params: { id: string };
  Body: {
    name: string;
    memorySize: number;
    frequency: number;
    typeId: number;
    power: number;
  };
}>;

export type DeleteRamRequest = FastifyRequest<{
  Params: { id: string };
}>;
