import { FastifyReply, FastifyRequest } from 'fastify';
import { FastifyDone } from '../routes/fastifyTypes';

type CustomRequest = FastifyRequest<{
  Params: { id: string };
}> & { myId: number | null };

export const testMiddleware = (request: CustomRequest, reply: FastifyReply, done: FastifyDone): void => {
  const { id } = request.params;

  console.log(`request params id: ${id}`);
  /**
   * Here we add custom filed to request.
   * It can be used, for example, to add user field in auth. middleware
   */
  request.myId = 1000;

  done();
};
