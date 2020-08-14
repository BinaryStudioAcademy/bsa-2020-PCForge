import { FastifyRequest } from 'fastify';
import { MotherboardCreationAttributes } from '../../data/models/motherboard';
import { IMotherboardFilter } from '../../data/repositories/filters/motherboard.filter';

export type GetAllMotherboardsRequest = FastifyRequest<{
  Querystring: IMotherboardFilter;
}>;

export type GetOneMotherboardRequest = FastifyRequest<{
  Params: { id: string };
}>;

export type PostMotherboardRequest = FastifyRequest<{
  Body: MotherboardCreationAttributes;
}>;

export type PutMotherboardRequest = FastifyRequest<{
  Params: { id: string };
  Body: MotherboardCreationAttributes;
}>;

export type DeleteMotherboardRequest = FastifyRequest<{
  Params: { id: string };
}>;
