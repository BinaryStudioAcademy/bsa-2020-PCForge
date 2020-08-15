import { FastifyRequest } from 'fastify';
import { MotherboardCreationAttributes } from '../../data/models/motherboard';
import { IMotherboardFilter } from '../../data/repositories/filters/motherboard.filter';
import { SwaggerSchema } from '../../data/models/swaggerSchema';
import { RamTypeSchema } from './ramType.schema';
import { SocketSchema } from './socket.schema';

export type GetAllMotherboardsRequest = FastifyRequest<{
  Querystring: IMotherboardFilter;
}>;

export type GetOneMotherboardRequest = FastifyRequest<{
  Params: { id: string };
}>;

export type PostMotherboardRequest = FastifyRequest<{
  Body: MotherboardCreationAttributes;
}>;

export type PutMotherboardRequest = FastifyRequest<{
  Params: { id: string };
  Body: MotherboardCreationAttributes;
}>;

export type DeleteMotherboardRequest = FastifyRequest<{
  Params: { id: string };
}>;

export const MotherBoardSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'number',
      example: 1,
      nullable: false
    },
    name: {
      type: 'string',
      example: 'Motherboard name',
      nullable: false,
    },
    socketId: {
      type: 'number',
      example: 1,
      nullable: false
    },
    ramTypeId: {
      type: 'number',
      example: 1,
      nullable: false
    },
    ramType: RamTypeSchema,
    socket: SocketSchema,
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

export const CreateMotherBoardSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      example: 'Motherboard name',
      nullable: false,
    },
    socketId: {
      type: 'number',
      example: 1,
      nullable: false
    },
    ramTypeId: {
      type: 'number',
      example: 1,
      nullable: false
    },
  }
}

export const UpdateMotherBoardSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      example: 'Motherboard name',
      nullable: true,
    },
    socketId: {
      type: 'number',
      example: 1,
      nullable: true
    },
    ramTypeId: {
      type: 'number',
      example: 1,
      nullable: true
    },
  },
}

export const GetAllMotherBoardResponse: SwaggerSchema = {
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
      items: MotherBoardSchema
    }
  }
}
