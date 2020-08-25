import { FastifyRequest } from 'fastify';
import { TopGameCreationAttributes } from '../../data/models/topgame';
import { IFilter } from '../../data/repositories/filters/base.filter';
import { SwaggerSchema } from '../../data/models/swaggerSchema';
import { GameSchema } from './game.schema';
import { UserAttributes } from '../../data/models/user';

export type GetAllTopGamesRequest = FastifyRequest<{
  Querystring: IFilter;
}> & { user: UserAttributes };

export type GetOneTopGameRequest = FastifyRequest<{
  Params: { id: string };
}> & { user: UserAttributes };

export type PostTopGameRequest = FastifyRequest<{
  Body: TopGameCreationAttributes;
}> & { user: UserAttributes };

export type PutTopGameRequest = FastifyRequest<{
  Params: { id: string };
  Body: TopGameCreationAttributes;
}> & { user: UserAttributes };

export type DeleteTopGameRequest = FastifyRequest<{
  Params: { id: string };
}> & { user: UserAttributes };

export const TopGameSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
      nullable: false,
      example: 1,
      minimum: 1,
    },
    gameId: {
      type: 'integer',
      nullable: false,
      example: 1,
      minimum: 1,
    },
    game: GameSchema,
    createdAt: {
      type: 'string',
      minLength: 1,
      format: 'date-time',
      nullable: false,
    },
    updatedAt: {
      type: 'string',
      minLength: 1,
      format: 'date-time',
      nullable: false,
    },
  },
};

export const CreateTopGameSchema: SwaggerSchema = {
  type: 'object',
  required: ['gameId'],
  properties: {
    gameId: {
      example: 1,
      minimum: 1,
      type: 'integer',
      nullable: false,
    },
  },
};

export const UpdateTopGameSchema: SwaggerSchema = {
  type: 'object',
  required: ['gameId'],
  properties: {
    gameId: {
      example: 1,
      minimum: 1,
      type: 'integer',
      nullable: true,
    },
  },
};

export const GetAllTopGames: SwaggerSchema = {
  type: 'object',
  properties: {
    meta: {
      type: 'object',
      properties: {
        globalCount: {
          type: 'integer',
          minimum: 0,
          nullable: false,
        },
        countAfterFiltering: {
          type: 'integer',
          minimum: 0,
          nullable: false,
        },
      },
    },
    data: {
      type: 'array',
      items: TopGameSchema,
    },
  },
};
