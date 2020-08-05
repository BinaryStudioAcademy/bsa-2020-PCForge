import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

export interface CommentAttributes {
  id: number;
  commentableType: string;
  commentableId: number;
  createdAt: Date;
  updatedAt: Date;
}
export interface CommentModel extends Model<CommentAttributes>, CommentAttributes {}
export class Comment extends Model<CommentModel, CommentAttributes> {}

export type CommentStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): CommentModel;
};

export function CommentFactory(sequelize: Sequelize): CommentStatic {
  return <CommentStatic>sequelize.define('comments', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    commentableType: {
      allowNull: false,
      type: DataTypes.STRING(50),
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
  });
}
