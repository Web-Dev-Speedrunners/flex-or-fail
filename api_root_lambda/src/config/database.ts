import * as dotenv from 'dotenv';
import { GetENVOrThrow } from '../util/setup';

dotenv.config();

class DatabaseConfig {
  static Host = GetENVOrThrow('DB_HOST')

  static User = GetENVOrThrow('DB_USER')

  static Password = GetENVOrThrow('DB_PASSWORD')

  static Name = GetENVOrThrow('DB_NAME')
}

export default DatabaseConfig;
