import { FastifyRequest } from 'fastify';
import { GameCreationAttributes } from '../../data/models/game';
import { IGameFilter } from '../../data/repositories/repositoriesFilterInterfaces';

export type GetAllGamesRequest = FastifyRequest<{
  Params: { id: string };
  Querystring: IGameFilter;
}>;

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
