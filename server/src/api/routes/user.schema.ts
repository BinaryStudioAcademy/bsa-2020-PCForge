import { FastifyRequest } from 'fastify';
import { SwaggerSchema } from '../../data/models/swaggerSchema';
import { GameSchema } from './game.schema';
import { IFilter } from '../../data/repositories/filters/base.filter';
import { SwaggerOptions } from 'fastify-swagger';

export type GetOneUserRequest = FastifyRequest<{
  Params: { id: string };
}>;

export type GetAllUsersRequest = FastifyRequest;

export type PostUserRequest = FastifyRequest<{
  Body: {
    name: string;
    password: string;
    email: string;
    avatar: string;
  };
}>;

export type PutUserRequest = FastifyRequest<{
  Params: { id: string };
  Body: {
    name: string;
    password: string;
    email: string;
    avatar: string;
  };
}>;

export type DeleteUserRequest = FastifyRequest<{
  Params: { id: string };
}>;

export const UserSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: false,
    },
    name: {
      example: 'username',
      type: 'string',
      nullable: true,
      maxLength: 50,
    },
    email: {
      example: 'example@example.com',
      type: 'string',
      format: 'email',
      nullable: false,
      maxLength: 50,
    },
    isAdmin: {
      type: 'boolean',
      nullable: false,
    },
    avatar: {
      example: 'http://image-server.com/route',
      type: 'string',
      nullable: true,
    },
    createdAt: {
      type: 'string',
      format: 'date-time',
      nullable: false,
    },
    updatedAt: {
      type: 'string',
      format: 'date-time',
      nullable: false,
    },
  },
};

export const GetAllUsersSchema: SwaggerSchema = {
  type: 'array',
  items: UserSchema,
};

export const CreateUserSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    email: {
      type: 'string',
      format: 'email',
      nullable: false,
      maxLength: 50,
    },
    password: {
      type: 'string',
      example: '**********',
      nullable: false,
      maxLength: 50,
    },
  },
};

export const UpdateUserSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      nullable: true,
      maxLength: 50,
    },
    email: {
      type: 'string',
      format: 'email',
      nullable: false,
      maxLength: 50,
    },
    password: {
      type: 'string',
      nullable: false,
      maxLength: 50,
    },
    oldPassword: {
      type: 'string',
      nullable: true,
      maxLength: 50,
    },
    avatar: {
      type: 'string',
      nullable: true,
    },
  },
};

export const UserGameSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: false,
    },
    userId: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: false,
    },
    gameId: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: false,
    },
    createdAt: {
      type: 'string',
      format: 'date-time',
      nullable: false,
    },
    updatedAt: {
      type: 'string',
      format: 'date-time',
      nullable: false,
    },
    game: GameSchema,
  },
};

export const CreateUserGameSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: false,
    },
  },
};

export const GetUserGamesSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    meta: {
      type: 'object',
      properties: {
        globalCount: {
          type: 'integer',
          nullable: false,
        },
        countAfterFiltering: {
          type: 'integer',
          nullable: false,
        },
      },
    },
    data: {
      type: 'array',
      items: UserGameSchema,
    },
  },
};

export type GetUserGamesRequest = FastifyRequest<{
  Params: { id: string };
  Querystring: IFilter;
}>;

export type CreateUserGameRequest = FastifyRequest<{
  Params: { id: string };
  Body: {
    id: string;
  };
}>;

export const CreateUserGameResponse: SwaggerSchema = {
  type: 'object',
  properties: {
    game: GameSchema,
    isNew: {
      type: 'boolean',
      nullable: false,
    },
  },
};

export type DeleteUserGameRequest = FastifyRequest<{
  Params: { id: string; gameId: string };
}>;
