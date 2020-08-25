import { FastifyReply, FastifyRequest, FastifyInstance } from 'fastify';
import { FastifyDone } from '../routes/fastifyTypes';
import { UserAttributes } from '../../data/models/user';
type CustomRequest = FastifyRequest<{}> & { user: UserAttributes };

export const userRequestMiddleware = (fastify: FastifyInstance) => {
  return async (request: CustomRequest, reply: FastifyReply, done: FastifyDone): Promise<void> => {
    const token = request.headers?.authorization?.replace('Bearer ', '') || '';

    fastify.jwt.verify(token, (err, decoded) => {
      if (!err && decoded) {
        request.user = decoded.user;
      }
    });
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
