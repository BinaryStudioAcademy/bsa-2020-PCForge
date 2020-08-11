import { FastifyRequest } from 'fastify';

export type GetAllTopGamesRequest = FastifyRequest;

export type GetOneTopGameRequest = FastifyRequest<{
  Params: { id: string };
}>;

export type PostTopGameRequest = FastifyRequest<{
  Body: {
    gameId: number;
  };
}>;

export type PutTopGameRequest = FastifyRequest<{
  Params: { id: string };
  Body: {
    gameId: number;
  };
}>;

export type DeleteTopGameRequest = FastifyRequest<{
  Params: { id: string };
}>;
