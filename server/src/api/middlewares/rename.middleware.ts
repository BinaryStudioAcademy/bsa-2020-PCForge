import { FastifyRequest } from 'fastify';
import { UserAttributes } from '../../data/models/user';
type CustomRequest = FastifyRequest & { user?: UserAttributes };

export function renameQuery(request: CustomRequest, ...rest: [string, string][]): void {
  for (const option of rest) {
    const toReplace = option[0];
    const replacer = option[1];
    if (request.query[toReplace]) {
      request.query[replacer] = request.query[toReplace];
      delete request.query[toReplace];
    }
  }
}
