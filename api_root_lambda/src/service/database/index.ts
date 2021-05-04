import StudentSequelizeModel from './student.model';
import CampusSequelizeModel from './campus.model';
import sequelize from './sequelize';

// ============== Assoications ==============
CampusSequelizeModel.hasMany(StudentSequelizeModel, {
  foreignKey: 'campusId',
});

export {
  StudentSequelizeModel,
  CampusSequelizeModel,
};

export default sequelize;
