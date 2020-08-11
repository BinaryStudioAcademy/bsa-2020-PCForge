import { FastifyRequest } from 'fastify';
import { SocketCreationAttributes } from '../../data/models/socket';

export type GetSocketRequest = FastifyRequest<{
  Params: { id: string };
}>;

export type PostSocketRequest = FastifyRequest<{
  Body: SocketCreationAttributes;
}>;

export type PutSocketRequest = FastifyRequest<{
  Params: { id: string };
  Body: SocketCreationAttributes;
}>;

export type DeleteSocketRequest = FastifyRequest<{
  Params: { id: string };
}>;
