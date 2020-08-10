import { FastifyRequest } from 'fastify';

export type GetAllGamesRequest = FastifyRequest;

export type GetOneGameRequest = FastifyRequest<{
  Params: { id: string };
}>;

export type PostGameRequest = FastifyRequest<{
  Body: {
    name: string;
    year: number;
    image: string;
    description: string;
    recommendedCpuId: string;
    recommendedGpuId: string;
    recommendedRamSize: number;
    minimalCpuId: string;
    minimalGpuId: string;
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
    recommendedCpuId: string;
    recommendedGpuId: string;
    recommendedRamSize: number;
    minimalCpuId: string;
    minimalGpuId: string;
    minimalRamSize: number;
  };
}>;

export type DeleteGameRequest = FastifyRequest<{
  Params: { id: string };
}>;
