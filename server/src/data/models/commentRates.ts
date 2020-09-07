import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

export interface CommentRateAttributes {
  id: number;
  commentId: number;
  userId: number;
  isLiked: boolean;
  createdAt: Date;
  updatedAt: Date;
}
export interface CommentRateCreationAttributes {
  commentId: number;
  userId: number;
  isLiked: boolean;
}
export interface CommentRateModel extends Model<CommentRateAttributes>, CommentRateAttributes {}
export class CommentRate extends Model<CommentRateModel, CommentRateAttributes> {}

export type CommentRateStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): CommentRateModel;
};

export function CommentRateFactory(sequelize: Sequelize): CommentRateStatic {
  return <CommentRateStatic>sequelize.define('commentRates', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    commentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'comment',
        key: 'id',
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    isLiked: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  });
}
