import { FastifyRequest } from 'fastify';
import { GpuCreationAttributes } from '../../data/models/gpu';
import { IGpuFilter } from '../../data/repositories/filters/gpu.filter';

export type GetAllGpusRequest = FastifyRequest<{
  Querystring: IGpuFilter;
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
