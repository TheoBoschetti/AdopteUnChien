require("dotenv").config();
const mysql = require("mysql");
const port = process.env.BACKEND_PORT;
const WebMasterEmail = process.env.WEB_MASTER_EMAIL;

//Mysql
const connection = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE
});

module.exports = { connection, port, WebMasterEmail };
