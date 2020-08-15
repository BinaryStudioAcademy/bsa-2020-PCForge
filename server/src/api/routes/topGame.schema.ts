import { FastifyRequest } from 'fastify';
import { TopGameCreationAttributes } from '../../data/models/topgame';
import { IFilter } from '../../data/repositories/filters/base.filter';
import { SwaggerSchema } from '../../data/models/swaggerSchema';

export type GetAllTopGamesRequest = FastifyRequest<{
  Querystring: IFilter;
}>;

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

// it seems this api isn't working yet. Other schemas will be added later

export const CreateTopGameSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    gameId: {
      example: 1,
      type: 'integer',
      nullable: false,
    },
  }
}

