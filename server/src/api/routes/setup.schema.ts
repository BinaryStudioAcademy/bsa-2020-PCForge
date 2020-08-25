import { FastifyRequest } from 'fastify';
import { SetupCreationAttributes } from '../../data/models/setup';
import { SwaggerSchema } from '../../data/models/swaggerSchema';
import { CpuSchema } from './cpu.schema';
import { GpuSchema } from './gpu.schema';
import { MotherBoardSchema } from './motherboard.schema';
import { RamSchema } from './ram.schema';
import { PowerSupplySchema } from './powerSupply.schema';
import { ISetupFilter } from '../../data/repositories/filters/setup.filter';
import { CommentSchema } from './comment.schema';
import { UserAttributes } from '../../data/models/user';

export type GetSetupsRequest = FastifyRequest<{
  Querystring: ISetupFilter;
}>;

export type GetSetupRequest = FastifyRequest<{
  Params: { id: string };
}>;

export type PostSetupRequest = FastifyRequest<{
  Body: SetupCreationAttributes;
}> & { user: UserAttributes };

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
      minimum: 1,
      nullable: false,
    },
    title: {
      type: 'string',
      example: 'Setup name',
      nullable: false,
      minLength: 1,
    },
    description: {
      type: 'string',
      example: 'Setup description',
      nullable: false,
      minLength: 1,
    },
    image: {
      type: 'string',
      example: 'http://hosting-url.com/route',
      maxLength: 200,
      nullable: true,
    },
    cpuId: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: false,
    },
    authorId: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: false,
    },
    gpuId: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: false,
    },
    motherboardId: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: false,
    },
    ramId: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: false,
    },
    powerSupplyId: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: false,
    },
    createdAt: {
      type: 'string',
      nullable: false,
      format: 'date-time',
    },
    updatedAt: {
      type: 'string',
      nullable: false,
      format: 'date-time',
    },
    cpu: CpuSchema,
    gpu: GpuSchema,
    motherboard: MotherBoardSchema,
    ram: RamSchema,
    powerSupply: PowerSupplySchema,
  },
};

const getDetailedSetupSchema = (): SwaggerSchema => {
  const schema: SwaggerSchema = JSON.parse(JSON.stringify(SetupSchema));
  schema.properties.cpu = CpuSchema;
  schema.properties.gpu = GpuSchema;
  schema.properties.ram = RamSchema;
  schema.properties.motherboard = MotherBoardSchema;
  schema.properties.powerSupply = PowerSupplySchema;
  return schema;
};
export const DetailedSetupSchema: SwaggerSchema = getDetailedSetupSchema();

export const GetAllSetupsResponse: SwaggerSchema = {
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
      items: DetailedSetupSchema,
    },
  },
};

export const CreateSetupSchema: SwaggerSchema = {
  type: 'object',
  required: ['title', 'description', 'image', 'authorId', 'cpuId', 'gpuId', 'motherboardId', 'ramId', 'powerSupplyId'],
  properties: {
    title: {
      type: 'string',
      example: 'Setup title',
      nullable: false,
      minLength: 1,
    },
    description: {
      type: 'string',
      example: 'Setup description',
      nullable: false,
      minLength: 1,
    },
    image: {
      type: 'string',
      example: 'http://hosting-url.com/route',
      maxLength: 200,
      nullable: true,
      minLength: 1,
    },
    authorId: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: false,
    },
    cpuId: {
      type: 'integer',
      minimum: 1,
      example: 1,
      nullable: false,
    },
    gpuId: {
      type: 'integer',
      minimum: 1,
      example: 1,
      nullable: false,
    },
    motherboardId: {
      type: 'integer',
      example: 1,
      nullable: false,
    },
    ramId: {
      type: 'integer',
      example: 1,
      nullable: false,
    },
    powerSupplyId: {
      type: 'integer',
      example: 1,
      nullable: false,
    },
  },
};

export const UpdateSetupSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    title: {
      type: 'string',
      example: 'Setup title',
      nullable: true,
      minLength: 1,
    },
    description: {
      type: 'string',
      example: 'Setup description',
      nullable: true,
      minLength: 1,
    },
    image: {
      type: 'string',
      example: 'http://hosting-url.com/route',
      maxLength: 200,
      nullable: true,
      minLength: 1,
    },
    authorId: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: true,
    },
    cpuId: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: true,
    },
    gpuId: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: true,
    },
    motherboardId: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: true,
    },
    ramId: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: true,
    },
    powerSupplyId: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: true,
    },
  },
};
