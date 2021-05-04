import { Sequelize } from 'sequelize';
import DatabaseConfig from '../../config/database';
import AppStage, { CURRENT_STAGE } from '../../constant/app_stage';

// Public for Testing
export function createSequelizeInstance(): Sequelize {
  try {
    console.log('Connecting to DB...');
    const sequelize = new Sequelize(
      DatabaseConfig.Name,
      DatabaseConfig.User,
      DatabaseConfig.Password,
      {
        host: DatabaseConfig.Host,
        dialect: 'postgres',
        logging: CURRENT_STAGE === AppStage.Test ? false : console.log,
      },
    );
    console.log('\t\tSuccess!');
    return sequelize;
  } catch (error) {
    console.log('\t\tUnable to connect to database');
    console.log(error);
    throw error;
  }
}

/**
 * NEVER IMPORT FROM HERE OUTSIDE OF `service/database`.
 * Import from `service/database/index` instead
 */
export default createSequelizeInstance();
