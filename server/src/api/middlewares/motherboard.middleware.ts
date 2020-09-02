import { FastifyInstance } from 'fastify';
import { triggerServerError } from '../../helpers/global.helper';
import { MotherboardCreationAttributes } from '../../data/models/motherboard';

export type IMotherboardMiddleware = (input: MotherboardCreationAttributes) => void;

export const MotherboardMiddleware = (fastify: FastifyInstance): IMotherboardMiddleware => {
  const { RamTypeService, SocketService } = fastify.services;

  return async (input: MotherboardCreationAttributes) => {
    const { ramTypeId, socketId } = input;

    if (ramTypeId) {
      const ramType = RamTypeService.getRamTypeById(String(ramTypeId));
      if (!ramType) {
        triggerServerError(`Ram type with id ${ramTypeId} does not exists`, 400);
      }
    }
    if (socketId) {
      const socket = SocketService.getSocketById(String(socketId));
      if (!socket) {
        triggerServerError(`Socket with id ${socketId} does not existss`, 400);
      }
    }
  };
};
