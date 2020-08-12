import { FastifyRequest } from 'fastify';
import { GpuCreationAttributes } from '../../data/models/gpu';
import { IFilter } from '../../data/repositories/repositoriesFilterInterfaces';

export type GetAllGpusRequest = FastifyRequest<{
  Querystring: IFilter;
}>;

export type GetOneGpuRequest = FastifyRequest<{
  Params: { id: string };
}>;

export type PostGpuRequest = FastifyRequest<{
  Body: GpuCreationAttributes;
}>;

export type PutGpuRequest = FastifyRequest<{
  Params: { id: string };
  Body: GpuCreationAttributes;
}>;

export type DeleteGpuRequest = FastifyRequest<{
  Params: { id: string };
}>;
