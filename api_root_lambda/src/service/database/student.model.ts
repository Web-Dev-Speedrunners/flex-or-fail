import { DataTypes, Model } from 'sequelize';
import sequelize from './sequelize';

export interface StudentSequelizeModelAttributes {
  id: number;
  firstName: string;
  campusId: string; // foreign key
}

export default class StudentSequelizeModel
  extends Model
  implements StudentSequelizeModelAttributes {
  // Define all associated attributes
  id: number;

  firstName: string;

  campusId: string;
}

StudentSequelizeModel.init(
  {
    // Define Database Columns
    firstName: {
      type: DataTypes.STRING(24),
      allowNull: false,
    },
  },
  { sequelize, modelName: 'student' },
);
