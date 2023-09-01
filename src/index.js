const express = require('express');
const usersRoutes = require('./routes/users');
const UserController = require('./controller/users');
const MiddlewareLogRequest = require('./middleware/logs');
const app = express();

app.use(MiddlewareLogRequest.logRequest);

app.use('/users', usersRoutes);

app.listen(4000, () => {
  console.log('Redy server Port 4000');
});
