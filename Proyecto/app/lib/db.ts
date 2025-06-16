// lib/db.ts
import mysql from 'mysql2/promise';

// Configura tu pool de conexiones a la base de datos
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost', // O la IP de tu servidor de DB
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'Sweet22*', // ¡CAMBIA ESTO POR TU CONTRASEÑA REAL!
  database: process.env.DB_NAME || 'legaliter_db', 
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;

// Opcional: Función para probar la conexión
async function testDbConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('Conexión a la base de datos MySQL exitosa.');
    connection.release(); // Liberar la conexión
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error);
    process.exit(1); // Salir de la aplicación si no se puede conectar a la DB
  }
}

// Llama a la función de prueba al iniciar la aplicación (opcional)
// testDbConnection();