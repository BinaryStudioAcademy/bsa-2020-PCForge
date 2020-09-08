import { FastifyReply, FastifyRequest, FastifyInstance } from 'fastify';
import { FastifyDone } from '../routes/fastifyTypes';
import { UserAttributes } from '../../data/models/user';
type CustomRequest = FastifyRequest<{ Params: { id: string } }> & { user: UserAttributes };

export const userRequestMiddleware = (fastify: FastifyInstance) => {
  const { UserService } = fastify.services;
  return async (request: CustomRequest, reply: FastifyReply, done: FastifyDone): Promise<void> => {
    const token = request.headers?.authorization?.replace('Bearer ', '') || '';

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
