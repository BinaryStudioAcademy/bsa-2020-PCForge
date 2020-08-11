import { FastifyRequest } from 'fastify';
import { GpuCreationAttributes } from '../../data/models/gpu';

export type GetGpuRequest = FastifyRequest<{
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
