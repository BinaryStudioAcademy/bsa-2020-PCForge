import { FastifyReply, FastifyRequest, FastifyInstance } from 'fastify';
import { FastifyDone } from '../routes/fastifyTypes';
import { UserAttributes } from '../../data/models/user';
type CustomRequest = FastifyRequest<{
  Body: { token: string };
}> & { user: UserAttributes };

export const userRequestMiddleware = (fastify: FastifyInstance) => {
  return async (request: CustomRequest, reply: FastifyReply, done: FastifyDone): Promise<void> => {
    console.log('userRequestMiddleware -> request.body', request);
    const { token } = request.body;

    fastify.jwt.verify(token, (err, decoded) => {
      request.user = decoded.user;
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
