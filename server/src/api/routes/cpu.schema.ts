import { FastifyRequest } from 'fastify';
import { CpuCreationAttributes } from '../../data/models/cpu';
import { ICpuFilter } from '../../data/repositories/filters/cpu.filter';

export type GetAllCpusRequest = FastifyRequest<{
  Querystring: ICpuFilter;
}>;

export type GetOneCpuRequest = FastifyRequest<{
  Params: { id: string };
}>;

export type PostCpuRequest = FastifyRequest<{
  Body: CpuCreationAttributes;
}>;

export type PutCpuRequest = FastifyRequest<{
  Params: { id: string };
  Body: CpuCreationAttributes;
}>;

export type DeleteCpuRequest = FastifyRequest<{
  Params: { id: string };
}>;
