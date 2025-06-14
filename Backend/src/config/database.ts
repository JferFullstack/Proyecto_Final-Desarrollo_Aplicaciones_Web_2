// backend/src/config/database.ts
import { Sequelize } from 'sequelize';
import * as path from 'path'; 


const configPath = path.resolve(__dirname, '../../config/config.json');
const config = require(configPath); 
const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  logging: dbConfig.logging,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

export default sequelize;