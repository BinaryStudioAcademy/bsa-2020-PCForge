import { UserSchema } from './user.schema';
import { SocketSchema } from './socket.schema';
import { SetupSchema } from './setup.schema';
import { RateSchema } from './rate.schema';
import { RamTypeSchema } from './ramType.schema';
import { RamSchema } from './ram.schema';
import { PowerSupplySchema } from './powerSupply.schema';
import { NewsSchema } from './news.schema';
import { MotherBoardSchema } from './motherboard.schema';
import { GpuSchema } from './gpu.schema';
import { GameSchema } from './game.schema';
import { CpuSchema } from './cpu.schema';
import { CommentSchema } from './comment.schema';
import { FastifyRegisterOptions } from 'fastify';
import { SwaggerOptions } from 'fastify-swagger';

const SwaggerMainSchema: FastifyRegisterOptions<SwaggerOptions> = {
  swagger: {
    info: {
      title: 'pcforge',
      version: '1',
    },
    definitions: {
      User: UserSchema,
      Socket: SocketSchema,
      Setup: SetupSchema,
      Rate: RateSchema,
      RamType: RamTypeSchema,
      Ram: RamSchema,
      PowerSupply: PowerSupplySchema,
      News: NewsSchema,
      MotherBoard: MotherBoardSchema,
      Gpu: GpuSchema,
      Game: GameSchema,
      Cpu: CpuSchema,
      Comment: CommentSchema,
    },
  },
  exposeRoute: true,
  routePrefix: '/documentation',
};

export default SwaggerMainSchema;
