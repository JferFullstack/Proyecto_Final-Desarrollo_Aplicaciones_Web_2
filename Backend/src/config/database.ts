// backend/src/config/database.ts

import { Sequelize } from 'sequelize-typescript'; // Importa Sequelize
import { User } from '../models/User'; // Importa tu modelo de Usuario

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT || 3306), // Asegúrate de que DB_PORT esté en .env o usa 3306
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME, // <--- ¡Asegúrate de que sea process.env.DB_NAME aquí!
  models: [User],
  logging: false,
  // ...
});

export { sequelize }; 