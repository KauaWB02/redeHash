

// AQUI CHAMA O BANCO DE DADOS = IMPORTAR
const mysql = require('mysql2/promise');

//  EXPLICADO : CHAMAR O .ENV
const dotenv = require('dotenv').config();

// AQUI VOCE CONECTA O MYSQL.. ATENÇÃO: mysql.createPool()
const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  database: process.env.MYSQL_DATABASE
});

//HABILITA A EXPORTAÇÃO 
module.exports = connection;