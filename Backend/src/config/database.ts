// backend/src/config/database.ts

import { Sequelize } from 'sequelize-typescript'; 
import { User } from '../models/User'; 

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT || 3306), 
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME, 
  models: [User],
  logging: false,
  // ...
});

export { sequelize }; 