import { FastifyRequest } from 'fastify';
import { GameCreationAttributes } from '../../data/models/game';

export type GetAllGamesRequest = FastifyRequest;

export type GetOneGameRequest = FastifyRequest<{
  Params: { id: string };
}>;

export type PostGameRequest = FastifyRequest<{
  Body: GameCreationAttributes;
}>;

export type PutGameRequest = FastifyRequest<{
  Params: { id: string };
  Body: GameCreationAttributes;
}>;

export type DeleteGameRequest = FastifyRequest<{
  Params: { id: string };
}>;
