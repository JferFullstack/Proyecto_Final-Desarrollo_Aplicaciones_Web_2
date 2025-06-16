// backend/src/app.ts
// Añadir un log de inicio muy temprano
import 'dotenv/config'; 
import express from 'express';
import cors from 'cors';
import sequelize from './config/database'; 
import authRoutes from './routes/authRoutes';
const app = express();
const PORT = process.env.PORT || 4000;

/*
console.log('1. Backend: Iniciando app.ts...');

import 'dotenv/config'; // Importa dotenv/config para cargar variables de entorno
console.log('2. Backend: dotenv/config cargado.');

import express from 'express';
import cors from 'cors';
console.log('3. Backend: Express y CORS importados.');

import sequelize from './config/database'; // Importa la instancia de Sequelize
console.log('4. Backend: Sequelize importado.');

import authRoutes from './routes/authRoutes';// Importa las rutas de autenticación
console.log('5. Backend: authRoutes importado.');

import { User } from './models/User'; // Importa tu modelo de usuario aquí
console.log('6. Backend: Modelo de Usuario importado.');


const app = express();
const PORT = process.env.PORT || 4000;
console.log(`7. Backend: Puerto configurado: ${PORT}`);
console.log(`8. Backend: CLIENT_URL: ${process.env.CLIENT_URL}`); // Verifica que CLIENT_URL se carga

// Middleware
app.use(express.json());
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
console.log('9. Backend: Middlewares configurados.');

// Probar la conexión a la base de datos y sincronizar modelos
// Usamos .then/.catch aquí para manejar la conexión de forma asíncrona
sequelize.authenticate()
  .then(() => {
    console.log('10. Backend: Conectado a MySQL correctamente.');
    // Sincroniza todos los modelos definidos con la base de datos.
    // `alter: true` intenta hacer cambios en el esquema sin perder datos, útil en desarrollo.
    // En producción, considera usar migraciones.
    return sequelize.sync({ alter: true });
  })
  .then(() => {
    console.log('11. Backend: Modelos sincronizados con la base de datos.');
  })
  .catch((err: Error) => {
    console.error('12. Backend: ¡ERROR CRÍTICO! Fallo al conectar o sincronizar con la base de datos:', err);
    // Asegurarse de que el error se imprima antes de salir
    process.exit(1); // Sale de la aplicación si no se puede conectar a la DB
  });
  */

// Rutas
app.use('/api/auth', authRoutes); // Prefijo para todas las rutas de autenticación
console.log('13. Backend: Rutas de autenticación configuradas.');

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Servidor backend funcionando!');
});
console.log('14. Backend: Ruta de prueba configurada.');


// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`15. Backend: Servidor Express corriendo en http://localhost:${PORT}`);
});

console.log('16. Backend: Fin del script app.ts.'); // Log al final, después de la configuración del servidor