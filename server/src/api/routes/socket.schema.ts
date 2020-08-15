import { FastifyRequest } from 'fastify';
import { SocketCreationAttributes } from '../../data/models/socket';
import { IFilter } from '../../data/repositories/filters/base.filter';
import { SwaggerSchema } from '../../data/models/swaggerSchema';

export type GetAllSocketsRequest = FastifyRequest<{
  Querystring: IFilter;
}>;

export type GetOneSocketRequest = FastifyRequest<{
  Params: { id: string };
}>;

export type PostSocketRequest = FastifyRequest<{
  Body: SocketCreationAttributes;
}>;

export type PutSocketRequest = FastifyRequest<{
  Params: { id: string };
  Body: SocketCreationAttributes;
}>;

export type DeleteSocketRequest = FastifyRequest<{
  Params: { id: string };
}>;

export const SocketSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'number',
      example: 1,
      nullable: false
    },
    name: {
      type: 'string',
      example: 'Unique socket name',
      nullable: false,
    },
    createdAt: {
      type: 'string',
      nullable: false,
      format: 'date-time'
    },
    updatedAt: {
      type: 'string',
      nullable: false,
      format: 'date-time'
    }
  }
}

export const GetAllSocketsResponse: SwaggerSchema = {
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
      items: SocketSchema
    }
  }
}

export const CreateSocketSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      example: 'socket name',
      nullable: false,
    },
  }
}

export const UpdateSocketSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      example: 'socket name',
      nullable: true,
    },
  }
}
