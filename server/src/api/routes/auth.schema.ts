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

export type ResetPasswordRequestRequest = FastifyRequest<{
  Body: {
    email: string;
  };
}>;

export type ResetPasswordRequest = FastifyRequest<{
  Body: {
    userId: string;
    token: string;
    newPassword: string;
  };
}>;

const LoginRequest: SwaggerSchema = {
  type: 'object',
  required: ['email', 'password'],
  properties: {
    email: {
      type: 'string',
      minLength: 1,
      nullable: false,
      format: 'email',
    },
    password: {
      type: 'string',
      minLength: 1,
      nullable: false,
      example: '**********',
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
        minLength: 1,
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
      minLength: 1,
      nullable: false,
      example:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTc1NjIzMDAsImV4cCI6MTU5NzY0ODcwMH0.4Ml0sHEr7wQowqzmU38lKjP5Wgms1ASJQ5wMbP8pHhU',
    },
    user: UserSchema,
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
    user: UserSchema,
  },
};

const isAuthenticatedRequest: SwaggerSchema = {
  type: 'object',
  properties: {
    token: {
      type: 'string',
      minLength: 1,
      nullable: false,
      example:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTc1NjIzMDAsImV4cCI6MTU5NzY0ODcwMH0.4Ml0sHEr7wQowqzmU38lKjP5Wgms1ASJQ5wMbP8pHhU',
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

export const ResetPasswordRequestSchema = {
  schema: {
    body: {
      type: 'object',
      required: ['email'],
      properties: {
        email: {
          type: 'string',
          nullable: false,
          example: 'mail@gmail.com',
          minLength: 1,
        },
      },
    },
    response: {
      200: {
        type: 'object',
      },
      404: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            example: 'Item not found',
            nullable: false,
          },
          error: {
            type: 'string',
            example: 'Item not found',
            nullable: false,
          },
          status: {
            type: 'integer',
            nullable: false,
            example: 404,
          },
        },
        nullable: false,
      },
    },
  },
};

export const ResetPasswordSchema = {
  schema: {
    body: {
      type: 'object',
      required: ['userId', 'token', 'newPassword'],
      properties: {
        userId: {
          type: 'integer',
          example: 1,
          minimum: 1,
          nullable: false,
        },
        token: {
          type: 'string',
          nullable: false,
          example: '312ui7iudhjkasdbckxyz',
          minLength: 1,
        },
        newPassword: {
          type: 'string',
          nullable: false,
          example: 'password',
          minLength: 1,
        },
      },
    },
    response: {
      200: {
        type: 'object',
      },
      404: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            example: 'Item not found',
            nullable: false,
          },
          error: {
            type: 'string',
            example: 'Item not found',
            nullable: false,
          },
          status: {
            type: 'integer',
            nullable: false,
            example: 404,
          },
        },
        nullable: false,
      },
    },
  },
};
