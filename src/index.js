const express = require('express');
const usersRoutes = require('./routes/users');
const UserController = require('./controller/users');
const MiddlewareLogRequest = require('./middleware/logs');
const app = express();
const mysql = require('mysql2');

// Create the connection pool. The pool-specific settings are the defaults
const dbPool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'express_mysql',
  password: '',
});

app.use(MiddlewareLogRequest.logRequest);
app.use(express.json());
app.use('/users', usersRoutes);

app.use('/', (req, res) => {
  dbPool.execute('SELECT * FROM `users`', (err, rows) => {
    if (err) {
      res.json({
        message: 'Connection Error',
      });
    }

    res.json({
      message: 'Conection Success',
      dara: rows,
    });
  });
});

app.listen(4000, () => {
  console.log('Redy server Port 4000');
});
