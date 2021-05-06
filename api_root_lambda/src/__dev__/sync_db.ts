/**
 * Allows you to sync database
 * Requirements:
 *  - .env file with all database variables
 * Command:  yarn run db:sync
 * Optional Arguments:
 *  -f: force sync
 *
 * Note:
 *  - This will delete all entries in the database
 */

import minimist from 'minimist';
import { exit } from 'process';
import DatabaseConfig from '../config/database';
import sequelize from '../service/database';

async function run(): Promise<void> {
  try {
    const {
      f: force = false,
    } = minimist(process.argv.slice(2));
    console.log(`Syncing database: ${DatabaseConfig.Name}`);
    console.log(`\tforce: ${force}`);
    await sequelize.sync({ force });
    exit(0);
  } catch (error) {
    console.log(error);
    exit(1);
  }
}

run();
