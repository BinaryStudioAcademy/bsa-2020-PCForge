import { FastifyRequest } from 'fastify';
import { UserAttributes } from '../../data/models/user';
import { triggerServerError } from '../../helpers/global.helper';
// eslint-disable-next-line @typescript-eslint/ban-types
type CustomRequest = FastifyRequest<{}> & { user?: UserAttributes };

export function allowForAdmin(request: CustomRequest): void {
  if (!request.user?.isAdmin) {
    triggerServerError('Access allowed only for admins', 403);
  }
}

export function allowForVerified(request: CustomRequest): void {
  console.log(request.user?.emailVerified);
  if (!request.user?.emailVerified) {
    triggerServerError('Access allowed only for users verified by email', 403);
  }
}

export function allowForAuthorized(request: CustomRequest): void {
  if (!request.user) {
    triggerServerError('Access allowed only for authorized users', 403);
  }
}
