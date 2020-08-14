import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

export interface RateAttributes {
  id: number;
  ratebleType: string;
  userId: number;
  ratebleId: number;
  createdAt: Date;
  updatedAt: Date;
  value: number;
}
export interface RateCreationAttributes {
  ratebleType: string;
  userId: number;
  ratebleId: number;
  value: number;
}
export interface RateModel extends Model<RateAttributes>, RateAttributes {}
export class Rate extends Model<RateModel, RateAttributes> {}

export type RateStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): RateModel;
};

export function RateFactory(sequelize: Sequelize): RateStatic {
  return <RateStatic>sequelize.define('rate', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    ratebleType: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    ratebleId: {
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
    value: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });
}
