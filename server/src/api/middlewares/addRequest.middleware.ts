import { FastifyInstance } from 'fastify';
import { AddRequestCreationAttributes } from '../../data/models/addRequest';
import { triggerServerError } from '../../helpers/global.helper';

export type IAddRequestMiddleware = (inputAddRequest: AddRequestCreationAttributes) => void;

export const AddRequestMiddleware = (fastify: FastifyInstance): IAddRequestMiddleware => {
  const { UserService } = fastify.services;

  return async (inputAddRequest: AddRequestCreationAttributes) => {
    const { userId } = inputAddRequest;
    const stringUserId = userId.toString();

    const user = await UserService.getUser(stringUserId);
    if (!user) {
      triggerServerError(`There's no user with id: ${userId}`, 404);
    }
  };
};
