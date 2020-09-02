import { FastifyReply, FastifyRequest, FastifyInstance } from 'fastify';
import { FastifyDone } from '../routes/fastifyTypes';
import { UserAttributes } from '../../data/models/user';
import { OAuth2Client } from 'google-auth-library';
import { triggerServerError } from '../../helpers/global.helper';
type CustomRequest = FastifyRequest<{ Params: { id: string } }> & { user: UserAttributes };

export const userRequestMiddleware = (fastify: FastifyInstance) => {
  const { UserService } = fastify.services;
  return async (request: CustomRequest, reply: FastifyReply, done: FastifyDone): Promise<void> => {
    const token = request.headers?.authorization?.replace('Bearer ', '') || '';
    if (!token) {
      triggerServerError(`Authorization token is not defined`, 400);
    }

    let decodedData: undefined | { user: UserAttributes };
    fastify.jwt.verify(token, (err, decoded) => {
      if (!err && decoded) {
        decodedData = decoded;
      }
    });
    if (decodedData?.user) {
      const user = await UserService.getByEmail(decodedData.user.email);
      request.user = user as UserAttributes;
    }
  };
};
