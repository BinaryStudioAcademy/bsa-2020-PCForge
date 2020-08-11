import { FastifyRequest } from 'fastify';
import { RamTypeCreationAttributes } from '../../data/models/ramtype';
import { IFilter } from '../../data/repositories/repositoriesFilterInterfaces';

export type GetAllRamTypesRequest = FastifyRequest<{
  Querystring: IFilter;
}>;

export type GetOneRamTypeRequest = FastifyRequest<{
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
