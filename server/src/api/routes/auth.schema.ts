import { FastifyRequest } from 'fastify';
import { SwaggerSchema } from '../../data/models/swaggerSchema';
import { UserSchema } from './user.schema';

export type PostAuthRequest = FastifyRequest<{
  Body: {
    email: string;
    password: string;
  };
}>;

export type IsUserAuthenticated = FastifyRequest<{
  Body: {
    token: string;
  };
}>;

const LoginRequest: SwaggerSchema = {
  type: 'object',
  required: ['email', 'password'],
  properties: {
    email: {
      type: 'string',
      nullable: false,
      format: 'email',
      minLength: 1,
    },
    password: {
      type: 'string',
      nullable: false,
      example: '**********',
      minLength: 1,
    },
  },
};

const LoginResponse: { [number: number]: SwaggerSchema } = {
  200: {
    type: 'object',
    properties: {
      token: {
        type: 'string',
        example:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTc1NjIzMDAsImV4cCI6MTU5NzY0ODcwMH0.4Ml0sHEr7wQowqzmU38lKjP5Wgms1ASJQ5wMbP8pHhU',
        nullable: false,
        minLength: 1,
      },
      user: UserSchema,
    },
  },
  401: {
    type: 'object',
    properties: {
      error: {
        type: 'string',
        example: 'User with given credential does not exist',
        nullable: false,
      },
    },
  },
};

export const LoginSchema = {
  schema: {
    body: LoginRequest,
    response: LoginResponse,
  },
};

const GoogleAuthResponse: SwaggerSchema = {
  type: 'object',
  properties: {
    token: {
      type: 'string',
      nullable: false,
      example:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTc1NjIzMDAsImV4cCI6MTU5NzY0ODcwMH0.4Ml0sHEr7wQowqzmU38lKjP5Wgms1ASJQ5wMbP8pHhU',
      minLength: 1,
    },
  },
};

const GoogleAuthRequest: SwaggerSchema = {
  type: 'object',
  additionalProperties: true,
};

export const GoogleAuthSchema = {
  schema: {
    response: {
      200: GoogleAuthResponse,
    },
    body: GoogleAuthRequest,
  },
};

const isAuthenticatedResponse: SwaggerSchema = {
  type: 'object',
  properties: {
    logged_in: {
      type: 'boolean',
      nullable: false,
    },
  },
};

const isAuthenticatedRequest: SwaggerSchema = {
  type: 'object',
  properties: {
    token: {
      type: 'string',
      nullable: false,
      example:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTc1NjIzMDAsImV4cCI6MTU5NzY0ODcwMH0.4Ml0sHEr7wQowqzmU38lKjP5Wgms1ASJQ5wMbP8pHhU',
      minLength: 1,
    },
  },
};

export const IsAuthenticatedSchema = {
  schema: {
    body: isAuthenticatedRequest,
    response: {
      200: isAuthenticatedResponse,
    },
  },
};
