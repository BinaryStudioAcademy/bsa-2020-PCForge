import { FastifyReply, FastifyRequest, FastifyInstance } from 'fastify';
import { FastifyDone } from '../routes/fastifyTypes';
import { UserAttributes } from '../../data/models/user';
type CustomRequest = FastifyRequest<{
  Body: { token: string; toke: string };
}> & { user: UserAttributes };

export const userRequestMiddleware = (fastify: FastifyInstance) => {
  return async (request: CustomRequest, reply: FastifyReply, done: FastifyDone): Promise<void> => {
    const { token } = request.body;
    fastify.jwt.verify(token, (err, decoded) => {
      request.user = decoded.user;
    });
    done();
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
