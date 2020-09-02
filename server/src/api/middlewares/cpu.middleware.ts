import { FastifyInstance } from 'fastify';
import { triggerServerError } from '../../helpers/global.helper';
import { CpuCreationAttributes } from '../../data/models/cpu';

export type ICpusMiddleware = (input: CpuCreationAttributes) => void;

export const CpuMiddleware = (fastify: FastifyInstance): ICpusMiddleware => {
  const { SocketService } = fastify.services;

  return async (input: CpuCreationAttributes) => {
    const { socketId } = input;

    if (socketId) {
      const socket = await SocketService.getSocketById(String(socketId));
      if (!socket) {
        triggerServerError(`Socket with id ${socketId} does not exists`, 400);
      }
    }
  };
};
