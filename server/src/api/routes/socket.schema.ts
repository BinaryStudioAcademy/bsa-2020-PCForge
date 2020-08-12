import { FastifyRequest } from 'fastify';
import { SocketCreationAttributes } from '../../data/models/socket';
import { IFilter } from '../../data/repositories/repositoriesFilterInterfaces';

export type GetAllSocketsRequest = FastifyRequest<{
  Querystring: IFilter;
}>;

export type GetOneSocketRequest = FastifyRequest<{
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
