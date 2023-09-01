require('dotenv').config();
const PORT = process.env.PORT || 5000;
const express = require('express');
const usersRoutes = require('./routes/users');
const UserController = require('./controller/users');
const MiddlewareLogRequest = require('./middleware/logs');
const app = express();

app.use(MiddlewareLogRequest.logRequest);
app.use(express.json());
app.use('/users', usersRoutes);

app.listen(PORT, () => {
  console.log('Redy server Port', PORT);
});
