import { FastifyRequest } from 'fastify';

export type PostAuthRequest = FastifyRequest<{
  Body: {
    login: string;
    password: string;
  };
}>;

export type IsUserAuthenticated = FastifyRequest<{
  Body: {
    token: string;
  };
}>;
