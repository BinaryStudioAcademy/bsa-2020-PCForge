import { FastifyRequest } from 'fastify';
import { SwaggerSchema } from '../../data/models/swaggerSchema';
import { UserSchema } from './user.schema';
import { UserAttributes } from '../../data/models/user';

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
  properties: {
    email: {
      type: 'string',
      minLength: 1,
      nullable: false,
      format: 'email'
    },
    password: {
      type: 'string',
      minLength: 1,
      nullable: false,
      example: '**********',
    }
  }
}

const LoginResponse: {[number: number]: SwaggerSchema} = {
  200: {
    type: 'object',
    properties: {
      token: {
        type: 'string',
      minLength: 1,
        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTc1NjIzMDAsImV4cCI6MTU5NzY0ODcwMH0.4Ml0sHEr7wQowqzmU38lKjP5Wgms1ASJQ5wMbP8pHhU',
        nullable: false
      },
      user: UserSchema
    },
  },
  401: {
    type: 'object',
    properties: {
      error: {
        type: 'string',
      minLength: 1,
        example: 'User with given credential does not exist',
        nullable: false
      },
    }
  }
}

export const LoginSchema = {
  schema: {
    body: LoginRequest,
    response: LoginResponse
  }
}

const GoogleAuthResponse: SwaggerSchema = {
  type: 'object',
  properties: {
    token: {
      type: 'string',
      minLength: 1,
      nullable: false,
      example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTc1NjIzMDAsImV4cCI6MTU5NzY0ODcwMH0.4Ml0sHEr7wQowqzmU38lKjP5Wgms1ASJQ5wMbP8pHhU',
    }
  }
}

const GoogleAuthRequest: SwaggerSchema = {
  type: 'object',
  additionalProperties: true
}

export const GoogleAuthSchema = {
  schema: {
    response: {
      200: GoogleAuthResponse
    },
    body: GoogleAuthRequest
  }
}

const isAuthenticatedResponse: SwaggerSchema = {
  type: 'object',
  properties: {
    logged_in: {
      type: 'boolean',
      nullable: false
    }
  }
}

const isAuthenticatedRequest: SwaggerSchema = {
  type: 'object',
  properties: {
    token: {
      type: 'string',
      minLength: 1,
      nullable: false,
      example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTc1NjIzMDAsImV4cCI6MTU5NzY0ODcwMH0.4Ml0sHEr7wQowqzmU38lKjP5Wgms1ASJQ5wMbP8pHhU',
    }
  }
}

export const IsAuthenticatedSchema = {
  schema: {
    body: isAuthenticatedRequest,
    response: {
      200: isAuthenticatedResponse
    }
  }
}
