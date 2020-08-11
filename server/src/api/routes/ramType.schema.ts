import { FastifyRequest } from 'fastify';
import { RamTypeCreationAttributes } from '../../data/models/ramtype';

export type GetRamTypeRequest = FastifyRequest<{
  Params: { id: string };
}>;

export type PostRamTypeRequest = FastifyRequest<{
  Body: RamTypeCreationAttributes;
}>;

export type PutRamTypeRequest = FastifyRequest<{
  Params: { id: string };
  Body: RamTypeCreationAttributes;
}>;

export type DeleteRamTypeRequest = FastifyRequest<{
  Params: { id: string };
}>;
