import { FastifyRequest } from 'fastify';

export type GetCpuRequest = FastifyRequest<{
  Params: { id: string };
}>;

export type PostCpuRequest = FastifyRequest<{
  Body: {
    name: string;
    performance: number;
    socketId: number;
    clockspeed: number;
    tdp: number;
    cores: number;
    class: string;
  };
}>;

export type PutCpuRequest = FastifyRequest<{
  Params: { id: string };
  Body: {
    name: string;
    performance: number;
    socketId: number;
    clockspeed: number;
    tdp: number;
    cores: number;
    class: string;
  };
}>;

export type DeleteCpuRequest = FastifyRequest<{
  Params: { id: string };
}>;
