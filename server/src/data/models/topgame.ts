import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';
import { GameAttributes } from './game';
import { UserAttributes } from './user';

export interface TopGameAttributes {
  id: number;
  game: GameAttributes;
  addedBy: UserAttributes;

  createdAt: Date;
  updatedAt: Date;
}

export interface TopGameCreationAttributes {
  gameId: number;
}

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
