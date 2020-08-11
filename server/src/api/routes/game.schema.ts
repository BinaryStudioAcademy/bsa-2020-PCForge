import { FastifyRequest } from 'fastify';

export type GetGameByIdRequest = FastifyRequest<{ Params: { id: string } }>;
export type GetAllGamesRequest = FastifyRequest<{
  Params: { id: string };
  Querystring: {
    year: number;
    from: number;
    count: number;
  };
}>;
export type PostGameRequest = FastifyRequest<{
  Body: {
    name: string;
    year: number;
    image: string;
    description: string;
    recommendedCpuId: number;
    recommendedGpuId: number;
    recommendedRamSize: number;
    minimalCpuId: number;
    minimalGpuId: number;
    minimalRamSize: number;
  };
}>;
export type PutGameRequest = FastifyRequest<{
  Params: { id: string };
  Body: {
    name: string;
    year: number;
    image: string;
    description: string;
    recommendedCpuId: number;
    recommendedGpuId: number;
    recommendedRamSize: number;
    minimalCpuId: number;
    minimalGpuId: number;
    minimalRamSize: number;
  };
}>;
export type DeleteGameRequest = FastifyRequest<{ Params: { id: string } }>;
