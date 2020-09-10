import { FastifyRequest } from 'fastify';
import { FilterByNameType } from '../../data/repositories/filters/types';
type CustomRequest = FastifyRequest & { query: { name?: FilterByNameType } };

export function decodeName(request: CustomRequest): void {
  if (request.query.name) request.query.name = decodeURIComponent(request.query.name as string);
}
