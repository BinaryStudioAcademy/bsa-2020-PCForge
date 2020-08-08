import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

export interface RateAttributes {
  id: number;
  ratebleType: string;
  ratebleId: number;
  createdAt: Date;
  updatedAt: Date;
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
      allowNull: false,
      type: DataTypes.STRING(50),
    },
    ratebleId: {
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
