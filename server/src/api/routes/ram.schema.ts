import { FastifyRequest } from 'fastify';

export type GetOneRamRequest = FastifyRequest<{
  Params: { id: string };
}>;

export type GetAllRamsRequest = FastifyRequest<{
  Params: { id: string };
  Querystring: {
    typeId: string | null;
    from: number | null;
    count: number | null;
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
