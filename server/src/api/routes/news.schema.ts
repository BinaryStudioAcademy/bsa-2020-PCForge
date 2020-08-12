import { FastifyRequest } from 'fastify';

export type GetNewsRequest = FastifyRequest<{
  Params: { id: string };
}>;

export type PostNewsRequest = FastifyRequest<{
  Body: {
    title: string;
    content: string;
    image: string;
  };
}>;

export type PutNewsRequest = FastifyRequest<{
  Params: { id: string };
  Body: {
    title: string;
    content: string;
    image: string;
  };
}>;

export type DeleteNewsRequest = FastifyRequest<{
  Params: { id: string };
}>;
