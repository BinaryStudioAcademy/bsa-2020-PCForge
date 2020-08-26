import { FastifyRequest } from 'fastify';
import { SwaggerSchema } from '../../data/models/swaggerSchema';
import { UserAttributes } from '../../data/models/user';

export type GetOneUserRequest = FastifyRequest<{
  Params: { id: string };
}> & { user: UserAttributes };

export type GetAllUsersRequest = FastifyRequest & { user: UserAttributes };

export type PostUserRequest = FastifyRequest<{
  Body: {
    name: string;
    password: string;
    email: string;
    avatar: string;
  };
}> & { user: UserAttributes };

export type PutUserRequest = FastifyRequest<{
  Params: { id: string };
  Body: {
    name: string;
    password: string;
    email: string;
    avatar: string;
  };
}> & { user: UserAttributes };

export type DeleteUserRequest = FastifyRequest<{
  Params: { id: string };
}> & { user: UserAttributes };

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
      minLength: 1,
      nullable: true,
      maxLength: 50,
    },
    email: {
      example: 'example@example.com',
      type: 'string',
      minLength: 1,
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
      minLength: 1,
      maxLength: 500,
    },
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

export const GetAllUsersSchema: SwaggerSchema = {
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
      },
    },
    data: {
      type: 'array',
      items: UserSchema,
    },
  },
};

export const CreateUserSchema: SwaggerSchema = {
  type: 'object',
  required: ['email', 'password'],
  properties: {
    email: {
      type: 'string',
      minLength: 1,
      format: 'email',
      nullable: false,
      maxLength: 50,
    },
    password: {
      type: 'string',
      minLength: 5,
      example: '**********',
      nullable: false,
      maxLength: 50,
    },
  },
};

export const UpdateUserSchema: SwaggerSchema = {
  type: 'object',
  required: ['oldPassword'],
  properties: {
    name: {
      type: 'string',
      minLength: 1,
      nullable: true,
      maxLength: 50,
    },
    email: {
      type: 'string',
      minLength: 1,
      format: 'email',
      nullable: false,
      maxLength: 50,
    },
    password: {
      type: 'string',
      minLength: 5,
      nullable: false,
      maxLength: 50,
    },
    oldPassword: {
      type: 'string',
      minLength: 1,
      nullable: true,
      maxLength: 50,
    },
    avatar: {
      type: 'string',
      nullable: true,
      minLength: 1,
      maxLength: 500,
    },
  },
};
