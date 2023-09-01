const express = require('express');
const usersRoutes = require('./routes/users');
const UserController = require('./controller/users');
const app = express();

app.use('/users', usersRoutes);

app.get('/', UserController.getAllUers);
app.post('/', UserController.createNewUers);

app.listen(4000, () => {
  console.log('Redy server Port 4000');
});
