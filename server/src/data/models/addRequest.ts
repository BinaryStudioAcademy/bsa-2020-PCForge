import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';
import { UserAttributes } from './user';

export interface AddRequestAttributes {
  id: number;
  requestBody: string;
  requestedType: string;
  requestedHardwareType: string;
  userId: number;
  user: UserAttributes;
  createdAt: Date;
  updatedAt: Date;
}

export interface AddRequestCreationAttributes {
  requestBody: string;
  requestedType: string;
  requestedHardwareType: string;
  userId: number;
}

export interface AddRequestModel extends Model<AddRequestAttributes>, AddRequestAttributes {}
export class AddRequest extends Model<AddRequestModel, AddRequestAttributes> {}

export type AddRequestStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): AddRequestModel;
};

export function AddRequestFactory(sequelize: Sequelize): AddRequestStatic {
  return <AddRequestStatic>sequelize.define('addRequest', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    requestedType: {
      allowNull: false,
      type: DataTypes.STRING(50),
    },
    requestedHardwareType: {
      allowNull: true,
      type: DataTypes.STRING(50),
    },
    requestBody: {
      allowNull: false,
      type: DataTypes.TEXT,
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
