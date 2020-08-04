import orm from '../db/connection';

import { CommentFactory } from './comment';
import { CpuFactory } from './cpu';
import { GameFactory } from './game';
import { GpuFactory } from './gpu';
import { MotherboardFactory } from './motherboard';
import { NewsFactory } from './news';
import { PowerSupplyFactory } from './powersupply';
import { RamFactory } from './ram';
import { RamTypeFactory } from './ramtype';
import { RateFactory } from './rate';
import { SetupFactory } from './setup';
import { SocketFactory } from './socket';
import { UserFactory } from './user';
import { UserGameFactory } from './usergame';

const CommentModel = CommentFactory(orm);
const CpuModel = CpuFactory(orm);
const GameModel = GameFactory(orm);
const GpuModel = GpuFactory(orm);
const MotherboardModel = MotherboardFactory(orm);
const NewsModel = NewsFactory(orm);
const PowerSupplyModel = PowerSupplyFactory(orm);
const RamModel = RamFactory(orm);
const RamTypeModel = RamTypeFactory(orm);
const RateModel = RateFactory(orm);
const SetupModel = SetupFactory(orm);
const SocketModel = SocketFactory(orm);
const UserModel = UserFactory(orm);
const UserGameModel = UserGameFactory(orm);

CommentModel.belongsTo(UserModel);
CommentModel.belongsTo(SetupModel, { foreignKey: 'commentableId', constraints: false });
CommentModel.belongsTo(NewsModel, { foreignKey: 'commentableId', constraints: false });
CommentModel.belongsTo(GameModel, { foreignKey: 'commentableId', constraints: false });

CpuModel.belongsTo(SocketModel);
CpuModel.hasMany(SetupModel);
CpuModel.hasMany(GameModel);

GameModel.hasMany(RateModel, { foreignKey: 'ratebleId', constraints: false });
GameModel.hasMany(CommentModel, { foreignKey: 'commentableId', constraints: false });
GameModel.belongsTo(CpuModel, { as: 'minimalCpuId' });
GameModel.belongsTo(CpuModel, { as: 'recommendedCpuId' });
GameModel.belongsTo(GpuModel, { as: 'minimalGpuId' });
GameModel.belongsTo(GpuModel, { as: 'recommendedGpuId' });
GameModel.hasMany(UserGameModel);

GpuModel.hasMany(SetupModel);
GpuModel.hasMany(GameModel);

MotherboardModel.belongsTo(SocketModel);
MotherboardModel.belongsTo(RamTypeModel);

NewsModel.hasMany(RateModel, { foreignKey: 'ratebleId', constraints: false });
NewsModel.hasMany(CommentModel, { foreignKey: 'commentableId', constraints: false });

PowerSupplyModel.hasMany(SetupModel);

RamModel.belongsTo(RamTypeModel);
RamModel.hasMany(SetupModel);

RamTypeModel.hasMany(RamModel);
RamTypeModel.hasMany(MotherboardModel);

RateModel.belongsTo(UserModel);
RateModel.belongsTo(SetupModel, { foreignKey: 'ratebleId', constraints: false });
RateModel.belongsTo(NewsModel, { foreignKey: 'ratebleId', constraints: false });
RateModel.belongsTo(GameModel, { foreignKey: 'ratebleId', constraints: false });

SetupModel.belongsTo(UserModel);
SetupModel.belongsTo(CpuModel);
SetupModel.belongsTo(GpuModel);
SetupModel.belongsTo(RamModel);
SetupModel.belongsTo(MotherboardModel);
SetupModel.belongsTo(PowerSupplyModel);
SetupModel.hasMany(CommentModel, { foreignKey: 'commentableId', constraints: false });
SetupModel.hasMany(RateModel, { foreignKey: 'ratebleId', constraints: false });

SocketModel.hasMany(MotherboardModel);
SocketModel.hasMany(CpuModel);

UserModel.hasMany(RateModel);
UserModel.hasMany(CommentModel);
UserModel.hasMany(SetupModel);
UserModel.hasMany(UserGameModel);

UserGameModel.belongsTo(UserModel);
UserGameModel.belongsTo(GameModel);

// eslint-disable-next-line prettier/prettier
export {
  CommentModel,
  CpuModel,
  GameModel,
  GpuModel,
  MotherboardModel,
  NewsModel,
  PowerSupplyModel,
  RamModel,
  RamTypeModel,
  SetupModel,
  SocketModel,
  UserModel,
  UserGameModel,
};
