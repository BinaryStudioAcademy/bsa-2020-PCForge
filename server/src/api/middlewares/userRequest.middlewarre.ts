import { FastifyReply, FastifyRequest, FastifyInstance } from 'fastify';
import { FastifyDone } from '../routes/fastifyTypes';
import { UserAttributes } from '../../data/models/user';
import { triggerServerError } from '../../helpers/global.helper';
type CustomRequest = FastifyRequest<{
  Body: { token: string };
}> & { user: UserAttributes };

export const userRequestMiddleware = (fastify: FastifyInstance) => {
  return async (request: CustomRequest, reply: FastifyReply, done: FastifyDone): Promise<void> => {
    console.log(request.headers);
    const token = request.headers?.authorization?.replace('Bearer ', '') || '';

    fastify.jwt.verify(token, (err, decoded) => {
      if (err) {
        triggerServerError('Access denied', 403);
      }
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
