// Iniciando el server.
import mysql from 'mysql';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config({ path: './config.env' });
const app: express.Application = require('./app');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

connection.connect(() => console.log('Base de datos conectada con éxito!'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Server iniciado exitosamente en puerto', port);
});

export default connection;
