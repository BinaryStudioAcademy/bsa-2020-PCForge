import { Sequelize } from 'sequelize/types';
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
import { TopGameFactory } from './topgame';
import { UserFactory } from './user';
import { UserGameFactory } from './usergame';
import { AddRequestFactory } from './addRequest';
import { HddFactory } from './hdd';
import { SsdFactory } from './ssd';
import { CommentRateFactory } from './commentRates';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const initializeModels = (orm: Sequelize) => {
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
  const TopGameModel = TopGameFactory(orm);
  const AddRequestModel = AddRequestFactory(orm);
  const HddModel = HddFactory(orm);
  const SsdModel = SsdFactory(orm);
  const CommentRateModel = CommentRateFactory(orm);

  CommentModel.belongsTo(UserModel);
  CommentModel.belongsTo(SetupModel, { foreignKey: 'commentableId', constraints: false });
  CommentModel.belongsTo(NewsModel, { foreignKey: 'commentableId', constraints: false });
  CommentModel.belongsTo(GameModel, { foreignKey: 'commentableId', constraints: false });
  CommentModel.hasMany(CommentRateModel, { foreignKey: 'commentId', constraints: false });

  CpuModel.belongsTo(SocketModel);
  CpuModel.hasMany(SetupModel);

  GameModel.hasMany(RateModel, { foreignKey: 'ratebleId', constraints: false });
  GameModel.hasMany(CommentModel, { foreignKey: 'commentableId', constraints: false });
  GameModel.belongsTo(CpuModel, { as: 'minimalCpu' });
  GameModel.belongsTo(CpuModel, { as: 'recommendedCpu' });
  GameModel.belongsTo(GpuModel, { as: 'minimalGpu' });
  GameModel.belongsTo(GpuModel, { as: 'recommendedGpu' });
  GameModel.hasMany(UserGameModel);

  GpuModel.hasMany(SetupModel);

  MotherboardModel.belongsTo(SocketModel);
  MotherboardModel.belongsTo(RamTypeModel);

  NewsModel.hasMany(RateModel, { foreignKey: 'ratebleId', constraints: false });
  NewsModel.hasMany(CommentModel, { foreignKey: 'commentableId', constraints: false });

  PowerSupplyModel.hasMany(SetupModel);

  HddModel.hasMany(SetupModel);

  SsdModel.hasMany(SetupModel);

  RamModel.belongsTo(RamTypeModel, { foreignKey: 'typeId' });
  RamModel.hasMany(SetupModel);

  RamTypeModel.hasMany(RamModel, { foreignKey: 'typeId' });
  RamTypeModel.hasMany(MotherboardModel);

  RateModel.belongsTo(UserModel);
  RateModel.belongsTo(SetupModel, { foreignKey: 'ratebleId', constraints: false });
  RateModel.belongsTo(NewsModel, { foreignKey: 'ratebleId', constraints: false });
  RateModel.belongsTo(GameModel, { foreignKey: 'ratebleId', constraints: false });

  CommentRateModel.belongsTo(UserModel);
  CommentRateModel.belongsTo(CommentModel, { foreignKey: 'commentId', constraints: false });

  SetupModel.belongsTo(UserModel, { foreignKey: 'authorId', constraints: false, as: 'author' });
  SetupModel.belongsTo(CpuModel);
  SetupModel.belongsTo(GpuModel);
  SetupModel.belongsTo(RamModel);
  SetupModel.belongsTo(MotherboardModel);
  SetupModel.belongsTo(PowerSupplyModel);
  SetupModel.belongsTo(HddModel);
  SetupModel.belongsTo(SsdModel);
  SetupModel.hasMany(CommentModel, { foreignKey: 'commentableId', constraints: false });
  SetupModel.hasMany(RateModel, { foreignKey: 'ratebleId', constraints: false });
  SetupModel.belongsTo(SetupModel, { foreignKey: 'parentId' });

  CpuModel.belongsTo(SocketModel, { foreignKey: 'socketId' });
  CpuModel.hasMany(SetupModel);

  SocketModel.hasMany(CpuModel, { foreignKey: 'socketId' });
  SocketModel.hasMany(MotherboardModel);

  UserModel.hasMany(RateModel);
  UserModel.hasMany(CommentModel);
  UserModel.hasMany(CommentRateModel);
  UserModel.hasMany(SetupModel, { foreignKey: 'authorId', constraints: false });
  UserModel.hasMany(UserGameModel);

  UserGameModel.belongsTo(UserModel);
  UserGameModel.belongsTo(GameModel);

  TopGameModel.belongsTo(GameModel);
  GameModel.hasOne(TopGameModel);

  AddRequestModel.belongsTo(UserModel);

  // eslint-disable-next-line prettier/prettier
  return {
    AddRequest: AddRequestModel,
    Comment: CommentModel,
    Cpu: CpuModel,
    Game: GameModel,
    Gpu: GpuModel,
    Motherboard: MotherboardModel,
    News: NewsModel,
    PowerSupply: PowerSupplyModel,
    Ram: RamModel,
    RamType: RamTypeModel,
    Setup: SetupModel,
    Socket: SocketModel,
    User: UserModel,
    UserGame: UserGameModel,
    Rate: RateModel,
    TopGame: TopGameModel,
    Hdd: HddModel,
    Ssd: SsdModel,
    CommentRate: CommentRateModel,
  };
};
