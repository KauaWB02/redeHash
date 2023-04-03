/* eslint-disable no-unused-vars */

const mysql = require('mysql2/promise');
const dotenv = require('dotenv').config();

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  database: process.env.MYSQL_DATABASE
});

module.exports = connection;