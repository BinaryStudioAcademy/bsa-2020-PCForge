import { FastifyRequest } from 'fastify';

export type GetUserRequest = FastifyRequest<{
  Params: { id: string };
}>;

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
