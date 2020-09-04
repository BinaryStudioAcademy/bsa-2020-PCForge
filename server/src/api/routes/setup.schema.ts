import { FastifyRequest } from 'fastify';
import { SetupCreationAttributes } from '../../data/models/setup';
import { SwaggerSchema } from '../../data/models/swaggerSchema';
import { CpuSchema } from './cpu.schema';
import { GpuSchema } from './gpu.schema';
import { MotherBoardSchema } from './motherboard.schema';
import { RamSchema } from './ram.schema';
import { PowerSupplySchema } from './powerSupply.schema';
import { ISetupFilter } from '../../data/repositories/filters/setup.filter';
import { UserAttributes } from '../../data/models/user';
import { HddSchema } from './hdd.schema';
import { SsdSchema } from './ssd.schema';
import { UserSchema } from './user.schema';

export type GetSetupsRequest = FastifyRequest<{
  Querystring: ISetupFilter;
}> & { user: UserAttributes };

export type GetSetupRequest = FastifyRequest<{
  Params: { id: string };
}> & { user: UserAttributes };

export type PostSetupRequest = FastifyRequest<{
  Body: SetupCreationAttributes;
}> & { user: UserAttributes };

export type PutSetupRequest = FastifyRequest<{
  Params: { id: string };
  Body: SetupCreationAttributes;
}> & { user: UserAttributes };

export type DeleteSetupRequest = FastifyRequest<{
  Params: { id: string };
}> & { user: UserAttributes };

export type ForkSetupRequest = FastifyRequest<{
  Body: { setupId: string };
}> & { user: UserAttributes };

export const SetupSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: false,
    },
    rating: {
      type: 'number',
      example: 1,
      minimum: 0,
      maximum: 5,
      nullable: true,
    },
    ownRating: {
      type: 'number',
      example: 1,
      minimum: 0,
      maximum: 5,
      nullable: true,
    },
    ratingCount: {
      type: 'number',
      example: 1,
      minimum: 0,
      nullable: true,
    },
    comments_count: {
      type: 'integer',
      minLength: 1,
      example: '1',
      nullable: false,
    },
    title: {
      type: 'string',
      minLength: 1,
      example: 'Setup name',
      nullable: false,
    },
    description: {
      type: 'string',
      minLength: 1,
      example: 'Setup description',
      nullable: false,
    },
    image: {
      type: 'string',
      minLength: 1,
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
    ramCount: {
      type: 'integer',
      example: 2,
      minimum: 1,
      nullable: false,
    },
    powerSupplyId: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: false,
    },
    hddId: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: true,
      default: null,
    },
    ssdId: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: true,
      default: null,
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
    cpu: CpuSchema,
    gpu: GpuSchema,
    motherboard: MotherBoardSchema,
    ram: RamSchema,
    powerSupply: PowerSupplySchema,
    author: UserSchema,
  },
};

const getDetailedSetupSchema = (): SwaggerSchema => {
  const schema: SwaggerSchema = JSON.parse(JSON.stringify(SetupSchema));
  schema.properties.cpu = CpuSchema;
  schema.properties.gpu = GpuSchema;
  schema.properties.ram = RamSchema;
  schema.properties.motherboard = MotherBoardSchema;
  schema.properties.powerSupply = PowerSupplySchema;

  schema.properties.hdd = {
    ...HddSchema,
    nullable: true,
  };
  schema.properties.ssd = {
    ...SsdSchema,
    nullable: true,
  };
  schema.properties.author = UserSchema;
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
  required: ['title', 'description', 'image', 'cpuId', 'gpuId', 'motherboardId', 'ramId', 'powerSupplyId'],
  properties: {
    title: {
      type: 'string',
      minLength: 1,
      example: 'Setup title',
      nullable: false,
    },
    description: {
      type: 'string',
      minLength: 1,
      example: 'Setup description',
      nullable: false,
    },
    image: {
      type: 'string',
      minLength: 1,
      example: 'http://hosting-url.com/route',
      maxLength: 200,
      nullable: true,
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
    ramCount: {
      type: 'integer',
      example: 1,
      nullable: false,
    },
    hddId: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: true,
      default: null,
    },
    ssdId: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: true,
      default: null,
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
      minLength: 1,
      example: 'Setup title',
      nullable: true,
    },
    description: {
      type: 'string',
      minLength: 1,
      example: 'Setup description',
      nullable: true,
    },
    image: {
      type: 'string',
      minLength: 1,
      example: 'http://hosting-url.com/route',
      maxLength: 200,
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
    ramCount: {
      type: 'integer',
      example: 1,
      nullable: false,
    },
    hddId: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: true,
      default: null,
    },
    ssdId: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: true,
      default: null,
    },
    powerSupplyId: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: true,
    },
  },
};

export const ForkSetupSchema: SwaggerSchema = {
  type: 'object',
  properties: {
    setupId: {
      type: 'integer',
      example: 1,
      minimum: 1,
      nullable: false,
    },
  },
};
