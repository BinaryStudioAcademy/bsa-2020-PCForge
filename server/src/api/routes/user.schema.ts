import { FastifyRequest } from 'fastify';
import { SwaggerSchema } from '../../data/models/swaggerSchema';

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
      minLength: 1,
    },
    email: {
      example: 'example@example.com',
      type: 'string',
      format: 'email',
      nullable: false,
      maxLength: 50,
      minLength: 1,
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
      minLength: 1,
    },
    password: {
      type: 'string',
      example: '**********',
      nullable: false,
      maxLength: 50,
      minLength: 1,
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
      minLength: 1,
    },
    email: {
      type: 'string',
      format: 'email',
      nullable: false,
      maxLength: 50,
      minLength: 1,
    },
    password: {
      type: 'string',
      nullable: false,
      maxLength: 50,
      minLength: 1,
    },
    oldPassword: {
      type: 'string',
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
