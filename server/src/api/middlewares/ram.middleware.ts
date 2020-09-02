import { FastifyInstance } from 'fastify';
import { triggerServerError } from '../../helpers/global.helper';
import { RamCreationAttributes } from '../../data/models/ram';

export type IRamsMiddleware = (input: RamCreationAttributes) => void;

export const RamMiddleware = (fastify: FastifyInstance): IRamsMiddleware => {
  const { RamTypeService } = fastify.services;

  return async (input: RamCreationAttributes) => {
    const { typeId } = input;

    if (typeId) {
      const ramType = RamTypeService.getRamTypeById(String(typeId));
      if (!ramType) {
        triggerServerError(`Ram type with id ${typeId} does not exists`, 400);
      }
    }
  };
};
