import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

export interface UserGameAttributes {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}
export interface UserGameModel extends Model<UserGameAttributes>, UserGameAttributes {}
export class UserGame extends Model<UserGameModel, UserGameAttributes> {}

export type UserGameStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): UserGameModel;
};

export function UserGameFactory(sequelize: Sequelize): UserGameStatic {
  return <UserGameStatic>sequelize.define('userGames', {
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
