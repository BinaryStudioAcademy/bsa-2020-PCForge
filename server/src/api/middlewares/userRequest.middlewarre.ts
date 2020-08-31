import { FastifyReply, FastifyRequest, FastifyInstance } from 'fastify';
import { FastifyDone } from '../routes/fastifyTypes';
import { UserAttributes } from '../../data/models/user';
import { OAuth2Client } from 'google-auth-library';
type CustomRequest = FastifyRequest & { user: UserAttributes };

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
      }
    });
    if (decodedData) {
      const user = await UserService.getByEmail(decodedData.user.email);
      request.user = user as UserAttributes;
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
