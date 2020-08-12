import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

export interface UserAttributes {
  id: number;
  name: string;
  password: string;
  email: string;
  isAdmin: boolean;
  avatar: string | null;
  verifyEmailToken: string | null;
  resetPasswordToken: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserCreationAttributes {
  name: string;
  password: string;
  email: string;
  isAdmin: boolean;
  avatar: string | null;
  verifyEmailToken: string | null;
  resetPasswordToken: string | null;
}

export interface UserModel extends Model<UserAttributes>, UserAttributes {}
export class User extends Model<UserModel, UserAttributes> {}

export type UserStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): UserModel;
};

export function UserFactory(sequelize: Sequelize): UserStatic {
  return <UserStatic>sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(50),
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING(50),
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING(50),
    },
    isAdmin: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
    avatar: {
      type: DataTypes.STRING(50),
    },
    verifyEmailToken: {
      type: DataTypes.STRING(50),
    },
    resetPasswordToken: {
      type: DataTypes.STRING(50),
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
