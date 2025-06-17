// backend/src/app.ts

// 1. Importación CRÍTICA para los decoradores de Sequelize-TypeScript
// Debe ser la primera línea para que los decoradores funcionen correctamente.
import 'reflect-metadata';

// 2. Carga las variables de entorno desde el archivo .env
// Esto permite que tu aplicación acceda a PORT, DB_HOST, DB_USER, etc.
import 'dotenv/config';

// 3. Importa el framework Express para construir el servidor web
import express from 'express';

// 4. Importa el middleware CORS (Cross-Origin Resource Sharing)
// Es esencial para permitir que tu frontend (ej. localhost:3000)
// pueda hacer peticiones a este backend (ej. localhost:4000).
import cors from 'cors';

// 5. Importa la instancia de Sequelize configurada desde database.ts
// Usamos una importación nombrada porque en database.ts lo exportamos con `export { sequelize };`
import { sequelize } from './config/database';

// 6. Importa las rutas de autenticación que definiste
// Asegúrate de que el nombre del archivo 'authRoutes' sea correcto en tu carpeta 'src/routes'.
import authRoutes from './routes/authRoutes';


console.log('Backend: Iniciando app.ts...');

// Inicializa la aplicación Express
const app = express();

// 7. Configura el middleware CORS
// Permite peticiones desde el origen de tu frontend.
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000', // Origen de tu frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos HTTP permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Cabeceras permitidas
}));
console.log('Backend: Middlewares CORS configurados.');

// 8. Middleware para parsear los cuerpos de las peticiones en formato JSON
// Esto permite que tu backend lea los datos JSON enviados por el frontend (ej. al registrar/iniciar sesión).
// Debe ir antes de definir cualquier ruta que espere JSON.
app.use(express.json());
console.log('Backend: Middleware JSON configurado.');

// 9. Define una ruta de prueba básica
// Cuando accedas a http://localhost:4000/, verás este mensaje.
app.get('/', (req, res) => {
  res.send('Servidor backend funcionando!');
  console.log('Backend: Petición a la ruta raíz recibida.');
});
console.log('Backend: Ruta de prueba "/" configurada.');

// 10. Conecta las rutas de autenticación
// Todas las rutas dentro de authRoutes (ej. /register, /login)
// serán accesibles bajo el prefijo /api/auth.
// Por ejemplo: http://localhost:4000/api/auth/register
app.use('/api/auth', authRoutes);
console.log('Backend: Rutas de autenticación montadas en /api/auth.');


// 11. Conexión a la base de datos y sincronización de modelos
// Esto se hace de forma asíncrona.
sequelize.authenticate() // Intenta establecer la conexión con la base de datos
  .then(() => {
    console.log('Backend: Conectado a MySQL correctamente.');

    // Sincroniza los modelos de Sequelize con el esquema de la base de datos.
    // `alter: true` intentará realizar cambios en la tabla para que coincida con el modelo
    // sin perder datos si es posible (útil en desarrollo).
    return sequelize.sync({ alter: true });
  })
  .then(() => {
    console.log('Backend: Modelos sincronizados con la base de datos.');

    // 12. Inicia el servidor Express solo DESPUÉS de que la base de datos esté conectada
    const PORT = process.env.PORT || 4000; // Toma el puerto de .env o usa 4000 por defecto
    app.listen(PORT, () => {
      console.log(`Backend: Servidor Express corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((error: Error) => { // <--- ¡Añade ': Error' aquí!
    // Si hay un error en la conexión o sincronización de la base de datos,
    // imprime el error y sale de la aplicación.
    console.error('Backend: ¡ERROR CRÍTICO! Fallo al conectar o sincronizar con la base de datos:', error);
    process.exit(1); // Finaliza el proceso de Node.js
  });
 
console.log('Backend: Fin del script app.ts. Esperando conexión a DB y arranque del servidor...');
