import mysql from 'mysql2/promise';
import 'dotenv/config';

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test de connexion à la base de données
const testConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log('Connecté à la base de données MySQL avec succès!');
    connection.release();
  } catch (error) {
    console.error('Erreur de connexion à la base de données:', error.message);
  }
};

testConnection();

export default pool;