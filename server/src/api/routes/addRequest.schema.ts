import { FastifyRequest } from 'fastify';
import { SwaggerSchema } from '../../data/models/swaggerSchema';
import { AddRequestCreationAttributes } from '../../data/models/addRequest';
import { IAddRequestFilter } from '../../data/repositories/filters/addRequest.filter';
import { UserAttributes } from '../../data/models/user';

export type GetAllAddRequests = FastifyRequest<{
  Params: { id: string };
  Querystring: IAddRequestFilter;
}> & { user: UserAttributes };

export type GetOneAddRequest = FastifyRequest<{
  Params: { id: string };
}> & { user: UserAttributes };

export type PostAddRequestRequest = FastifyRequest<{
  Body: AddRequestCreationAttributes;
}> & { user: UserAttributes };

export type PutAddRequestRequest = FastifyRequest<{
  Params: { id: string };
  Body: AddRequestCreationAttributes;
}> & { user: UserAttributes };

export type DeleteAddRequestRequest = FastifyRequest<{
  Params: { id: string };
}> & { user: UserAttributes };

export const AddRequestSchema: SwaggerSchema = {
  type: 'object',
  description: 'User request for adding some hardware',
  properties: {
    id: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: false,
    },
    userId: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: false,
    },
    requestedType: {
      type: 'string',
      minLength: 1,
      example: 'cpu',
      enum: ['cpu', 'gpu', 'game', 'motherboard', 'ram', 'powerSupply'],
      nullable: false,
    },
    requestBody: {
      type: 'string',
      minLength: 1,
      example: 'Request body goes here...',
      nullable: false,
    },
    createdAt: {
      type: 'string',
      minLength: 1,
      nullable: false,
      format: 'date-time',
    },
    updatedAt: {
      type: 'string',
      minLength: 1,
      nullable: false,
      format: 'date-time',
    },
  },
};

export const GetAllAddRequest: SwaggerSchema = {
  type: 'object',
  properties: {
    meta: {
      type: 'object',
      properties: {
        globalCount: {
          type: 'integer',
          nullable: false,
        },
        countAfterFiltering: {
          type: 'integer',
          nullable: false,
        },
      },
    },
    data: {
      type: 'array',
      items: AddRequestSchema,
    },
  },
};

export const CreateAddRequestSchema: SwaggerSchema = {
  type: 'object',
  required: ['requestType', 'requestBody'],
  properties: {
    requestedType: {
      type: 'string',
      minLength: 1,
      example: 'cpu',
      enum: ['cpu', 'gpu', 'game', 'motherboard', 'ram', 'powerSupply'],
      nullable: false,
    },
    requestBody: {
      type: 'string',
      minLength: 1,
      example: 'Request body goes here...',
      nullable: false,
    },
  },
};

export const UpdateAddRequestSchema: SwaggerSchema = {
  type: 'object',
  required: ['requestType', 'requestBody'],
  properties: {
    requestedType: {
      type: 'string',
      minLength: 1,
      example: 'cpu',
      enum: ['cpu', 'gpu', 'game', 'motherboard', 'ram', 'powerSupply'],
    },
    requestBody: {
      type: 'string',
      minLength: 1,
      example: 'Request body goes here...',
      nullable: true,
    },
  },
};
