import { FastifyRequest } from 'fastify';

export type GetGpuRequest = FastifyRequest<{
  Params: { id: string };
}>;

export type PostGpuRequest = FastifyRequest<{
  Body: {
    name: string;
    interface: string;
    memorySize: number;
    coreClocks: number;
    opengl: string;
    tdp: number;
    performance: number;
  };
}>;

export type PutGpuRequest = FastifyRequest<{
  Params: { id: string };
  Body: {
    name: string;
    interface: string;
    memorySize: number;
    coreClocks: number;
    opengl: string;
    tdp: number;
    performance: number;
  };
}>;

export type DeleteGpuRequest = FastifyRequest<{
  Params: { id: string };
}>;
