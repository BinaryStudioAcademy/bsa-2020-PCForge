import { FastifyRequest } from 'fastify';
import { TopGameCreationAttributes } from '../../data/models/topgame';

export type GetAllTopGamesRequest = FastifyRequest;

export type GetOneTopGameRequest = FastifyRequest<{
  Params: { id: string };
}>;

export type PostTopGameRequest = FastifyRequest<{
  Body: TopGameCreationAttributes;
}>;

export type PutTopGameRequest = FastifyRequest<{
  Params: { id: string };
  Body: TopGameCreationAttributes;
}>;

export type DeleteTopGameRequest = FastifyRequest<{
  Params: { id: string };
}>;
