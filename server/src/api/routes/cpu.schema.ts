import { FastifyRequest } from 'fastify';
import { CpuCreationAttributes } from '../../data/models/cpu';
import { ICpuFilter } from '../../data/repositories/filters/cpu.filter';
import { SwaggerSchema } from '../../data/models/swaggerSchema';
import { SocketSchema } from './socket.schema';

export type GetAllCpusRequest = FastifyRequest<{
  Querystring: ICpuFilter;
}>;

export type GetOneCpuRequest = FastifyRequest<{
  Params: { id: string };
}>;

export type PostCpuRequest = FastifyRequest<{
  Body: CpuCreationAttributes;
}>;

export type PutCpuRequest = FastifyRequest<{
  Params: { id: string };
  Body: CpuCreationAttributes;
}>;

export type DeleteCpuRequest = FastifyRequest<{
  Params: { id: string };
}>;

export const CpuSchema: SwaggerSchema = {
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
      example: 'Intel Celeron D 347 @ 3.06GHz',
      nullable: false,
    },
    cores: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: false,
    },
    class: {
      type: 'string',
      minLength: 1,
      example: 'Desktop',
      nullable: false,
    },
    clockspeed: {
      type: 'integer',
      example: 800,
      minimum: 0,
      nullable: false,
    },
    tdp: {
      type: 'number',
      example: 16.2,
      minimum: 0,
      nullable: false,
    },
    performance: {
      type: 'integer',
      example: 160,
      minimum: 0,
      nullable: false,
    },
    socketId: {
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

const createDetailedCpuSchema = (): SwaggerSchema => {
  const schema: SwaggerSchema = JSON.parse(JSON.stringify(CpuSchema));
  schema.properties.socket = SocketSchema;

  return schema;
};

export const DetailedCpuSchema: SwaggerSchema = createDetailedCpuSchema();

export const CreateCpuSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      minLength: 1,
      example: 'Intel Celeron D 347 @ 3.06GHz',
      nullable: false,
    },
    cores: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: false,
    },
    class: {
      type: 'string',
      minLength: 1,
      example: 'Desktop',
      nullable: false,
    },
    clockspeed: {
      type: 'integer',
      example: 800,
      minimum: 0,
      nullable: false,
    },
    tdp: {
      type: 'number',
      example: 16.2,
      minimum: 0,
      nullable: false,
    },
    performance: {
      type: 'integer',
      example: 160,
      minimum: 0,
      nullable: false,
    },
    socketId: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: false,
    },
  },
};

export const UpdateCpuSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      minLength: 1,
      example: 'Intel Celeron D 347 @ 3.06GHz',
      nullable: false,
    },
    cores: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: false,
    },
    class: {
      type: 'string',
      minLength: 1,
      example: 'Desktop',
      nullable: false,
    },
    clockspeed: {
      type: 'integer',
      example: 800,
      minimum: 0,
      nullable: false,
    },
    tdp: {
      type: 'number',
      example: 16.2,
      minimum: 0,
      nullable: false,
    },
    performance: {
      type: 'integer',
      example: 160,
      minimum: 0,
      nullable: false,
    },
    socketId: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: false,
    },
  },
};

export const GetAllCpusResponse: SwaggerSchema = {
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
      items: DetailedCpuSchema,
    },
  },
};
