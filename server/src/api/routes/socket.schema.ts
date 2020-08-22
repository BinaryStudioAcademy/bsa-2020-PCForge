import { FastifyRequest } from 'fastify';
import { SocketCreationAttributes } from '../../data/models/socket';
import { IFilter } from '../../data/repositories/filters/base.filter';
import { SwaggerSchema } from '../../data/models/swaggerSchema';
import { UserAttributes } from '../../data/models/user';

export type GetAllSocketsRequest = FastifyRequest<{
  Querystring: IFilter;
}> & { user: UserAttributes };

export type GetOneSocketRequest = FastifyRequest<{
  Params: { id: string };
}> & { user: UserAttributes };

export type PostSocketRequest = FastifyRequest<{
  Body: SocketCreationAttributes;
}> & { user: UserAttributes };

export type PutSocketRequest = FastifyRequest<{
  Params: { id: string };
  Body: SocketCreationAttributes;
}> & { user: UserAttributes };

export type DeleteSocketRequest = FastifyRequest<{
  Params: { id: string };
}> & { user: UserAttributes };

export const SocketSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: false
    },
    name: {
      type: 'string',
      minLength: 1,
      example: 'Unique socket name',
      nullable: false,
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
    }
  }
}

export const GetAllSockets: SwaggerSchema = {
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
      minLength: 1,
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
      minLength: 1,
      example: 'socket name',
      nullable: true,
    },
  }
}
