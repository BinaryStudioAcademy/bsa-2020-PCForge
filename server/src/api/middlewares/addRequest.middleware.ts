import { FastifyInstance } from 'fastify';
import { AddRequestCreationAttributes } from '../../data/models/addRequest';

export type IAddRequestMiddleware = (inputAddRequest: AddRequestCreationAttributes) => void;

export const AddRequestMiddleware = (fastify: FastifyInstance): IAddRequestMiddleware => {
  const { UserService } = fastify.services;

  return async (inputAddRequest: AddRequestCreationAttributes) => {
    const { userId } = inputAddRequest;
    const stringUserId = userId.toString();

    const user = await UserService.getUser(stringUserId);
    if (!user) {
      throw Error(`There's no user with id: ${userId}`);
    }
  };
};
