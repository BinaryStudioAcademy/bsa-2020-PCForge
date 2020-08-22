import { FastifyRequest } from 'fastify';
import { SwaggerSchema } from '../../data/models/swaggerSchema';
import { AddRequestCreationAttributes } from '../../data/models/addRequest';
import { IAddRequestFilter } from '../../data/repositories/filters/addRequest.filter';

export type GetAllAddRequests = FastifyRequest<{
  Params: { id: string };
  Querystring: IAddRequestFilter;
}>;

export type GetOneAddRequest = FastifyRequest<{
  Params: { id: string };
}>;

export type PostAddRequestRequest = FastifyRequest<{
  Body: AddRequestCreationAttributes;
}>;

export type PutAddRequestRequest = FastifyRequest<{
  Params: { id: string };
  Body: AddRequestCreationAttributes;
}>;

export type DeleteAddRequestRequest = FastifyRequest<{
  Params: { id: string };
}>;

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
      nullable: false
    },
    requestedType: {
      type: 'string',
      minLength: 1,
      example: 'cpu',
      enum: ['cpu', 'gpu', 'game', 'motherboard', 'ram', 'powerSupply'],
      nullable: false
    },
    requestBody: {
      type: 'string',
      minLength: 1,
      example: 'Request body goes here...',
      nullable: false
    },
    createdAt: {
      type: 'string',
      minLength: 1,
      nullable: false,
      format: 'date-time'
    },
    updatedAt: {
      type: 'string',
      minLength: 1,
      nullable: false,
      format: 'date-time'
    },
  },
}

export const GetAllAddRequest: SwaggerSchema = {
  type: 'object',
  properties: {
    meta: {
      type: 'object',
      properties: {
        globalCount: {
          type: 'integer',
          nullable: false
        },
        countAfterFiltering: {
          type: 'integer',
          nullable: false
        }
      }
    },
    data: {
      type: 'array',
      items: AddRequestSchema
    }
  }
}

export const CreateAddRequestSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    userId: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: false
    },
    requestedType: {
      type: 'string',
      minLength: 1,
      example: 'cpu',
      enum: ['cpu', 'gpu', 'game', 'motherboard', 'ram', 'powerSupply'],
      nullable: false
    },
    requestBody: {
      type: 'string',
      minLength: 1,
      example: 'Request body goes here...',
      nullable: false
    },
  }
}

export const UpdateAddRequestSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    userId: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: true
    },
    requestedType: {
      type: 'string',
      minLength: 1,
      example: 'cpu',
      enum: ['cpu', 'gpu', 'game', 'motherboard', 'ram', 'powerSupply'],
      nullable: true
    },
    requestBody: {
      type: 'string',
      minLength: 1,
      example: 'Request body goes here...',
      nullable: true
    },
  }
}
