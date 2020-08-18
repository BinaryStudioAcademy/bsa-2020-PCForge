import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';
import { CpuAttributes } from './cpu';
import { GpuAttributes } from './gpu';

export interface GameAttributes {
  id: number;
  name: string;
  year: number;
  image: string;
  description: string;
  recommendedRamSize: number;
  minimalRamSize: number;
  createdAt: Date;
  updatedAt: Date;
  recommendedCpu: CpuAttributes;
  minimalCpu: CpuAttributes;
  recommendedGpu: GpuAttributes;
  minimalGpu: GpuAttributes;
}

export interface GameCreationAttributes {
  name: string;
  year: number;
  image: string;
  description: string;
  recommendedRamSize: number;
  minimalRamSize: number;
  recommendedCpuId: number;
  recommendedGpuId: number;
  minimalCpuId: number;
  minimalGpuId: number;
}
export interface GameModel extends Model<GameAttributes>, GameAttributes {}
export class Game extends Model<GameModel, GameAttributes> {}

export type GameStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): GameModel;
};

export function GameFactory(sequelize: Sequelize): GameStatic {
  return <GameStatic>sequelize.define('game', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(150),
    },
    year: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    image: {
      allowNull: false,
      type: DataTypes.STRING(200),
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    recommendedRamSize: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    minimalRamSize: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  });
}
