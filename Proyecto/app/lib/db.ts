// lib/db.ts
import mysql from 'mysql2/promise';


const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost', 
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'Sweet22*', 
  database: process.env.DB_NAME || 'legaliter_db', 
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;


async function testDbConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('Conexión a la base de datos MySQL exitosa.');
    connection.release(); // Liberar la conexión
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error);
    process.exit(1); 
  }
}

// Llama a la función de prueba al iniciar la aplicación (opcional)
// testDbConnection();