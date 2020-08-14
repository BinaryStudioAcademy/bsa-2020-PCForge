import { FastifyRequest } from 'fastify';
import { RateCreationAttributes } from '../../data/models/rate';
import { IRateFilter } from '../../data/repositories/filters/rate.filter';

export type GetAllRatesRequest = FastifyRequest<{
  Params: { id: string };
  Querystring: IRateFilter;
}>;

export type GetOneRateRequest = FastifyRequest<{
  Params: { id: string };
}>;

export type PostRateRequest = FastifyRequest<{
  Body: RateCreationAttributes;
}>;

export type PutRateRequest = FastifyRequest<{
  Params: { id: string };
  Body: RateCreationAttributes;
}>;

export type DeleteRateRequest = FastifyRequest<{
  Params: { id: string };
}>;
