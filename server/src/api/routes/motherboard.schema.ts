import { FastifyRequest } from 'fastify';
import { MotherboardCreationAttributes } from '../../data/models/motherboard';
import { IMotherboardFilter } from '../../data/repositories/filters/motherboard.filter';
import { SwaggerSchema } from '../../data/models/swaggerSchema';
import { RamTypeSchema } from './ramType.schema';
import { SocketSchema } from './socket.schema';
import { UserAttributes } from '../../data/models/user';

export type GetAllMotherboardsRequest = FastifyRequest<{
  Querystring: IMotherboardFilter;
}> & { user: UserAttributes };

export type GetOneMotherboardRequest = FastifyRequest<{
  Params: { id: string };
}> & { user: UserAttributes };

export type PostMotherboardRequest = FastifyRequest<{
  Body: MotherboardCreationAttributes;
}> & { user: UserAttributes };

export type PutMotherboardRequest = FastifyRequest<{
  Params: { id: string };
  Body: MotherboardCreationAttributes;
}> & { user: UserAttributes };

export type DeleteMotherboardRequest = FastifyRequest<{
  Params: { id: string };
}> & { user: UserAttributes };

export const MotherBoardSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: false,
    },
    name: {
      type: 'string',
      minLength: 1,
      example: 'Motherboard name',
      nullable: false,
    },
    socketId: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: false,
    },
    ramTypeId: {
      type: 'integer',
      example: 1,
      minimum: 1,
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

const createDetailedMotherboardSchema = (): SwaggerSchema => {
  const schema: SwaggerSchema = JSON.parse(JSON.stringify(MotherBoardSchema));
  schema.properties.ramType = RamTypeSchema;
  schema.properties.socket = SocketSchema;

  return schema;
};

export const DetailedMotherBoardSchema = createDetailedMotherboardSchema();

export const CreateMotherBoardSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      minLength: 1,
      example: 'Motherboard name',
      nullable: false,
    },
    socketId: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: false,
    },
    ramTypeId: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: false,
    },
  },
};

export const UpdateMotherBoardSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      minLength: 1,
      example: 'Motherboard name',
      nullable: true,
    },
    socketId: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: true,
    },
    ramTypeId: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: true,
    },
  },
};

export const GetAllMotherBoardResponse: SwaggerSchema = {
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
      items: DetailedMotherBoardSchema,
    },
  },
};
