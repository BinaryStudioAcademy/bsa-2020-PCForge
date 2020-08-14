import { FastifyRequest } from 'fastify';
import { RamCreationAttributes } from '../../data/models/ram';
import { IRamFilter } from '../../data/repositories/filters/ram.filter';

export type GetOneRamRequest = FastifyRequest<{
  Params: { id: string };
}>;

export type GetAllRamsRequest = FastifyRequest<{
  Querystring: IRamFilter;
}>;

export type PostRamRequest = FastifyRequest<{
  Body: RamCreationAttributes;
}>;

export type PutRamRequest = FastifyRequest<{
  Params: { id: string };
  Body: RamCreationAttributes;
}>;

export type DeleteRamRequest = FastifyRequest<{
  Params: { id: string };
}>;
