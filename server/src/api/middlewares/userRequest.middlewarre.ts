import { FastifyReply, FastifyRequest, FastifyInstance } from 'fastify';
import { FastifyDone } from '../routes/fastifyTypes';
import { UserAttributes } from '../../data/models/user';
import { OAuth2Client } from 'google-auth-library';
import { triggerServerError } from '../../helpers/global.helper';
type CustomRequest = FastifyRequest<{ Params: { id: string } }> & { user: UserAttributes };

const oAuth2Client = new OAuth2Client(
  process.env.GOOGLE_OAUTH_CLIENT_ID,
  process.env.GOOGLE_OAUTH_CLIENT_SECRET,
  'http://localhost:5001/api/auth/google/callback'
);

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
        request.user = decoded.user;
      }
    });

    if (!decodedData) {
      try {
        const userData = (await oAuth2Client.verifyIdToken({ idToken: token })).getPayload();
        const user = await UserService.getByEmail(userData.email);
        if (!user) {
          triggerServerError(`User with email ${userData.email} is not defined`, 400);
        }
        request.user = user;
      } catch (err) {
        triggerServerError(err, 400);
      }
    }
  };
};
