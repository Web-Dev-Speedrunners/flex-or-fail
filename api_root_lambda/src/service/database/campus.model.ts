import { DataTypes, Model } from 'sequelize';
import sequelize from './sequelize';

export interface CampusSequelizeModelAttributes {
  id: number,
  name: string,
  address: string,
  description: string,
  imageUrl: string,
}

export default class CampusSequelizeModel
  extends Model
  implements CampusSequelizeModelAttributes {
  // Define all associated attributes
  id: number;

  name: string;

  address: string;

  description: string;

  imageUrl: string;
}

CampusSequelizeModel.init({
  // Define Database Columns
  name: {
    type: DataTypes.STRING(64),
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING(64),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(256),
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING(256),
    allowNull: false,
  },
}, { sequelize, modelName: 'campus' });
