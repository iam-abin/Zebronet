import { Model, DataTypes } from "sequelize";
import { sequelize } from "../../config/db.connection";

export class CourseModel extends Model {
  public id!: number;
  public courseName!: string;
  public description!: string;
  public duration!: string;
  public fees!: number;
  
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

CourseModel.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  courseName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true // creates a unique index automatically
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  duration: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fees: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'courses',
});