import { FastifyRequest } from 'fastify';
import { ISearchFilter } from '../../data/repositories/filters/search.filter';
import { UserAttributes } from '../../data/models/user';

export type SearchByAllDataRequest = FastifyRequest<{
  Params: { id: string };
  Querystring: ISearchFilter;
}> & { user: UserAttributes };
