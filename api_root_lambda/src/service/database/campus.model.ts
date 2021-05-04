import { DataTypes, Model } from 'sequelize';
import sequelize from './sequelize';

export interface CampusSequelizeModelAttributes {
  id: number;
  name: string
}

export default class CampusSequelizeModel
  extends Model
  implements CampusSequelizeModelAttributes {
  // Define all associated attributes
  id: number;

  name: string
}

CampusSequelizeModel.init({
  // Define Database Columns
  name: {
    type: DataTypes.STRING(64),
    allowNull: false,
  },
}, { sequelize, modelName: 'campus' });
