const dbPool = require('../config/database');

const getAllUsers = () => {
  const sqlQuery = 'SELECT * FROM users';
  return dbPool.execute(sqlQuery);
};

const createNewUsers = body => {
  const sqlQuery = `INSERT INTO users(name, email) 
                    VALUES('${body.name}', '${body.email}')`;
  return dbPool.execute(sqlQuery);
};

const updateUsers = (body, idUser) => {
  const sqlQuery = `UPDATE users SET name='${body.name}', email='${body.email}' WHERE id = ${idUser}`;
  return dbPool.execute(sqlQuery);
};

const deleteUsers = idUser => {
  const sqlQuery = `DELETE FROM users WHERE id = ${idUser}`;
  return dbPool.execute(sqlQuery);
};

module.exports = {getAllUsers, createNewUsers, updateUsers, deleteUsers};
