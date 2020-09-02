import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

export interface UserAttributes {
  id: number;
  name: string;
  password: string;
  email: string;
  isAdmin: boolean;
  isActive: boolean;
  avatar: string | null;
  emailVerified: boolean;
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
  isActive: boolean;
  avatar: string | null;
  emailVerified?: boolean;
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
      allowNull: true,
      unique: true,
      type: DataTypes.STRING(150),
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING(60),
    },
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING(50),
    },
    isActive: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    isAdmin: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
    avatar: {
      type: DataTypes.STRING(200),
    },
    verifyEmailToken: {
      type: DataTypes.STRING(50),
    },
    resetPasswordToken: {
      type: DataTypes.STRING(50),
    },
    emailVerified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
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
