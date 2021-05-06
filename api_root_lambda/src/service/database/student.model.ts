import { DataTypes, Model } from 'sequelize';
import sequelize from './sequelize';

export interface StudentSequelizeModelAttributes {
  id: number;
  firstName: string;
  lastName: string;
  gpa: number;
  email: string;
  imageUrl: string;
  campusId?: string; // foreign key
}

export default class StudentSequelizeModel
  extends Model
  implements StudentSequelizeModelAttributes {
  id: number;

  lastName: string;

  firstName: string;

  gpa: number;

  email: string;

  imageUrl: string;

  campusId: string;
}

StudentSequelizeModel.init(
  {
    // Define Database Columns
    firstName: {
      type: DataTypes.STRING(24),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(24),
      allowNull: false,
    },
    gpa: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING(265),
      allowNull: false,
    },
  },
  { sequelize, modelName: 'student' },
);
