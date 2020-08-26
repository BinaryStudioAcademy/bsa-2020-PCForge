import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

export interface UserGameAttributes {
  id: number;
  userId: number;
  gameId: number;
  game: UserGameModel;
  createdAt: Date;
  updatedAt: Date;
}
export interface UserGameCreationAttributes {
  userId: number;
  gameId: number;
}

export interface UserGameDeleteAttributes {
  userId: number;
  gameId: number;
}

export interface UserGameModel extends Model<UserGameAttributes>, UserGameAttributes {}
export class UserGame extends Model<UserGameModel, UserGameAttributes> {}

export type UserGameStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): UserGameModel;
};

export interface UserGameCreationResult {
  userGame: UserGameModel;
  isNew: boolean;
}

export function UserGameFactory(sequelize: Sequelize): UserGameStatic {
  return <UserGameStatic>sequelize.define('userGame', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    gameId: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
