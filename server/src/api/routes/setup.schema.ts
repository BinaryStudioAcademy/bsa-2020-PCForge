import { FastifyRequest } from 'fastify';
import { SetupCreationAttributes } from '../../data/models/setup';
import { SwaggerSchema } from '../../data/models/swaggerSchema';

export type GetSetupsRequest = FastifyRequest;

export type GetSetupRequest = FastifyRequest<{
  Params: { id: string };
}>;

export type PostSetupRequest = FastifyRequest<{
  Body: SetupCreationAttributes;
}>;

export type PutSetupRequest = FastifyRequest<{
  Params: { id: string };
  Body: SetupCreationAttributes;
}>;

export type DeleteSetupRequest = FastifyRequest<{
  Params: { id: string };
}>;

export const SetupSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
      example: 1,
      nullable: false
    },
    title: {
      type: 'string',
      example: 'Setup name',
      nullable: false,
    },
    description: {
      type: 'string',
      example: 'Setup description',
      nullable: false
    },
    image: {
      type: 'string',
      example: 'http://hosting-url.com/route',
      maxLength: 50,
      nullable: true
    },
    cpuId: {
      type: 'integer',
      example: 1,
      nullable: false
    },
    gpuId: {
      type: 'integer',
      example: 1,
      nullable: false
    },
    motherboardId: {
      type: 'integer',
      example: 1,
      nullable: false
    },
    ramId: {
      type: 'integer',
      example: 1,
      nullable: false
    },
    powerSupplyId: {
      type: 'integer',
      example: 1,
      nullable: false
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

export const GetAllSetupsResponse: SwaggerSchema = {
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
      items: SetupSchema
    }
  }
}

export const CreateSetupSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    title: {
      type: 'string',
      example: 'Setup title',
      nullable: false,
    },
    description: {
      type: 'string',
      example: 'Setup description',
      nullable: false
    },
    image: {
      type: 'string',
      example: 'http://hosting-url.com/route',
      maxLength: 50,
      nullable: true
    },
    authorId: {
      type: 'integer',
      example: 1,
      nullable: false
    },
    cpuId: {
      type: 'integer',
      example: 1,
      nullable: false
    },
    gpuId: {
      type: 'integer',
      example: 1,
      nullable: false
    },
    motherboardId: {
      type: 'integer',
      example: 1,
      nullable: false
    },
    ramId: {
      type: 'integer',
      example: 1,
      nullable: false
    },
    powerSupplyId: {
      type: 'integer',
      example: 1,
      nullable: false
    }
  }
}

export const UpdateSetupSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    title: {
      type: 'string',
      example: 'Setup title',
      nullable: true,
    },
    description: {
      type: 'string',
      example: 'Setup description',
      nullable: true
    },
    image: {
      type: 'string',
      example: 'http://hosting-url.com/route',
      maxLength: 50,
      nullable: true
    },
    cpuId: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: true
    },
    gpuId: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: true
    },
    motherboardId: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: true
    },
    ramId: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: true
    },
    powerSupplyId: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: true
    }
  }
}
