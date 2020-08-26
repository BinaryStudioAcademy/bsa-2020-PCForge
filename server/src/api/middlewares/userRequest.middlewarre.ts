import { FastifyReply, FastifyRequest, FastifyInstance } from 'fastify';
import { FastifyDone } from '../routes/fastifyTypes';
import { UserAttributes } from '../../data/models/user';
import { OAuth2Client, TokenPayload } from 'google-auth-library';
type CustomRequest = FastifyRequest & { user: UserAttributes | TokenPayload };

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
      return;
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
        try {
          const user = await UserService.getUserByLoginOrEmail(userData.email, '');
          request.user = user;
        } catch (err) {
          /* eslint-disable */
        }
      } catch (e) {
        /* eslint-disable */
      }
    }
  };
};

//UsageExample
// fastify.post(
//   '/route',
//   {
//     preHandler: [userRequestMiddleware(fastify)],
//   },
//   handler()
// )
