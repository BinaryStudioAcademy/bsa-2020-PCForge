import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';
import { CommentRateAttributes } from './commentRates';

export interface CommentAttributes {
  id: number;
  commentableType: string;
  userId: number;
  commentableId: number;
  createdAt: Date;
  updatedAt: Date;
  value: string;

  countLikes?: number;
  countDislikes?: number;
  isLikedByCurrentUser?: boolean;
  isDislikedByCurrentUser?: boolean;
  itemRateByAuthorComment?: number;
  commentRates?: Array<CommentRateAttributes>;
}
export interface CommentCreationAttributes {
  commentableType: string;
  userId: number;
  commentableId: number;
  value: string;
}
export interface CommentModel extends Model<CommentAttributes>, CommentAttributes {}
export class Comment extends Model<CommentModel, CommentAttributes> {}

export type CommentStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): CommentModel;
};

export function CommentFactory(sequelize: Sequelize): CommentStatic {
  return <CommentStatic>sequelize.define('comment', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    commentableType: {
      allowNull: false,
      type: DataTypes.STRING(50),
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    commentableId: {
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
    value: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
}
