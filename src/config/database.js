const mysql = require('mysql2');

// Create the connection pool. The pool-specific settings are the defaults
const dbPool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'express_mysql',
  password: '',
});

module.exports = dbPool.promise();
