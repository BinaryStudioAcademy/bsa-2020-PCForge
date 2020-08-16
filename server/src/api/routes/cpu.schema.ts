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
      nullable: false
    },
    name: {
      type: 'string',
      example: 'Intel Celeron D 347 @ 3.06GHz',
      nullable: false,
    },
    cores: {
      type: 'integer',
      example: 1,
      nullable: false
    },
    class: {
      type: 'string',
      example: 'Desktop',
      nullable: false
    },
    clockspeed: {
      type: 'integer',
      example: 800,
      nullable: false
    },
    tdp: {
      type: 'number',
      example: 16.2,
      nullable: false
    },
    perfomance: {
      type: 'integer',
      example: 160,
      nullable: false
    },
    socketId: {
      type: 'integer',
      example: 1,
      nullable: false
    },
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

export const CreateCpuSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      example: 'Intel Celeron D 347 @ 3.06GHz',
      nullable: false,
    },
    cores: {
      type: 'integer',
      example: 1,
      nullable: false
    },
    class: {
      type: 'string',
      example: 'Desktop',
      nullable: false
    },
    clockspeed: {
      type: 'integer',
      example: 800,
      nullable: false
    },
    tdp: {
      type: 'number',
      example: 16.2,
      nullable: false
    },
    perfomance: {
      type: 'integer',
      example: 160,
      nullable: false
    },
    socketId: {
      type: 'integer',
      example: 1,
      nullable: false
    },
  }
}

export const UpdateCpuSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      example: 'Intel Celeron D 347 @ 3.06GHz',
      nullable: false,
    },
    cores: {
      type: 'integer',
      example: 1,
      nullable: false
    },
    class: {
      type: 'string',
      example: 'Desktop',
      nullable: false
    },
    clockspeed: {
      type: 'integer',
      example: 800,
      nullable: false
    },
    tdp: {
      type: 'number',
      example: 16.2,
      nullable: false
    },
    perfomance: {
      type: 'integer',
      example: 160,
      nullable: false
    },
    socketId: {
      type: 'integer',
      example: 1,
      nullable: false
    },
  }
}

export const GetAllCpusResponse: SwaggerSchema = {
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
      items: CpuSchema
    }
  }
}


