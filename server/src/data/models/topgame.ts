import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';
import { GameModel } from './game';

export interface TopGameAttributes {
  id: number;
  game: GameModel;
  createdAt: Date;
  updatedAt: Date;
}

export interface TopGameCreationAttributes {
  gameId: number;
}

// export interface TopGameDataAttributes {
//   name: string;
//   year: number;
//   image: string;
//   description: string;
//   recommendedCpuId: string;
//   recommendedGpuId: string;
//   recommendedRamSize: number;
//   minimalCpuId: string;
//   minimalGpuId: string;
//   minimalRamSize: number;
// }

export interface TopGameModel extends Model<TopGameAttributes>, TopGameAttributes {}
export class TopGame extends Model<TopGameModel, TopGameAttributes> {}

export type TopGameStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): TopGameModel;
};

export function TopGameFactory(sequelize: Sequelize): TopGameStatic {
  return <TopGameStatic>sequelize.define('topGame', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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
