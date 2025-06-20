// backend/src/app.ts

import 'reflect-metadata';

import 'dotenv/config';

import express from 'express';

import cors from 'cors';

import { sequelize } from './config/database';

import authRoutes from './routes/authRoutes';


console.log('Backend: Iniciando app.ts...');

const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'], 
}));
console.log('Backend: Middlewares CORS configurados.');


app.use(express.json());
console.log('Backend: Middleware JSON configurado.');


app.get('/', (req, res) => {
  res.send('Servidor backend funcionando!');
  console.log('Backend: Petición a la ruta raíz recibida.');
});
console.log('Backend: Ruta de prueba "/" configurada.');

app.use('/api/auth', authRoutes);
console.log('Backend: Rutas de autenticación montadas en /api/auth.');



sequelize.authenticate() 
  .then(() => {
    console.log('Backend: Conectado a MySQL correctamente.');

    return sequelize.sync({ alter: true });
  })
  .then(() => {
    console.log('Backend: Modelos sincronizados con la base de datos.');

    const PORT = process.env.PORT || 4000; 
    app.listen(PORT, () => {
      console.log(`Backend: Servidor Express corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((error: Error) => { 
    console.error('Backend: ¡ERROR CRÍTICO! Fallo al conectar o sincronizar con la base de datos:', error);
    process.exit(1); 
  });
 
console.log('Backend: Fin del script app.ts. Esperando conexión a DB y arranque del servidor...');
