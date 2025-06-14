// backend/src/app.ts
import 'dotenv/config'; // Importa dotenv/config para cargar variables de entorno
import express from 'express';
import cors from 'cors';
import sequelize from './config/database'; // Importa la instancia de Sequelize
import authRoutes from './routes/auth'; // Importa las rutas de autenticación

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Probar la conexión a la base de datos
sequelize.authenticate()
  .then(() => {
    console.log('Conectado a MySQL correctamente.');
    // Si usas sequelize.sync(), import models here
    // import('./models/User'); // Importa tu modelo de usuario aquí para que sequelize lo conozca
    // return sequelize.sync({ alter: true }); // `alter: true` intenta cambiar el esquema sin perder datos (en desarrollo)
  })
  .then(() => {
    console.log('Modelos sincronizados con la base de datos (si force/alter es true).');
  })
  .catch((err: Error) => {
    console.error('Error al conectar o sincronizar con la base de datos:', err);
    process.exit(1); // Sale de la aplicación si no se puede conectar a la DB
  });

// Rutas
app.use('/api/auth', authRoutes); // Prefijo para todas las rutas de autenticación

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Servidor backend funcionando!');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});