// backend/src/config/database.ts
import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
dotenv.config(); // Asegúrate de que las variables de entorno se carguen aquí también

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  models: [__dirname + '/../models'], // Ruta a tus modelos
  logging: false, // Puedes poner true para ver los logs de SQL en la consola
});

export default sequelize;