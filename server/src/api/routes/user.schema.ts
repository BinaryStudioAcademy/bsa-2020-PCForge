import { FastifyRequest } from 'fastify';

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

export type FavoriteGameRequest = FastifyRequest<{
  Body: { userId: number; gameId: number };
}>;
