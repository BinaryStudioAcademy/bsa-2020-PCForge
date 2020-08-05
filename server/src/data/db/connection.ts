import Sequelize from 'sequelize';
import { config } from '../../../config/db.config';
import fp from 'fastify-plugin';

import { CommentStatic } from '../models/comment';
import { CpuStatic } from '../models/cpu';
import { GameStatic } from '../models/game';
import { GpuStatic } from '../models/gpu';
import { MotherboardStatic } from '../models/motherboard';
import { NewsStatic } from '../models/news';
import { PowerSupplyStatic } from '../models/powersupply';
import { RamStatic } from '../models/ram';
import { RamTypeStatic } from '../models/ramtype';
import { RateStatic } from '../models/rate';
import { SetupStatic } from '../models/setup';
import { SocketStatic } from '../models/socket';
import { UserStatic } from '../models/user';
import { UserGameStatic } from '../models/usergame';
import { initializeModels } from '../models/index';

export interface Models {
  Comment: CommentStatic;
  Cpu: CpuStatic;
  Game: GameStatic;
  Gpu: GpuStatic;
  Motherboard: MotherboardStatic;
  News: NewsStatic;
  PowerSupply: PowerSupplyStatic;
  Ram: RamStatic;
  RamType: RamTypeStatic;
  Rate: RateStatic;
  Setup: SetupStatic;
  Socket: SocketStatic;
  User: UserStatic;
  UserGame: UserGameStatic;
}

export interface Db {
  models: Models;
}

export default fp(async (fastify, opts, next) => {
  const { database, username, password, params } = config;
  const sequelize = new Sequelize(database, username, password, params);

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    const models: Models = initializeModels(sequelize);

    fastify.decorate('db', { models });
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  } finally {
    next();
  }
});
