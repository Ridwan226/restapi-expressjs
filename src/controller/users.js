const UsersModel = require('../models/users');

const getAllUers = async (req, res) => {
  try {
    const [data] = await UsersModel.getAllUsers();
    res.json({
      message: 'success',
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: err,
    });
  }
};

const createNewUers = (req, res) => {
  res.json({
    message: 'Create New Users Success',
    data: req.body,
  });
};

const updateDataUser = (req, res) => {
  const {id} = req.params;
  console.log('id users', id);
  res.json({
    message: 'Update Users Success',
    data: req.body,
  });
};

const deleteDataUSer = (req, res) => {
  const {id} = req.params;
  console.log('id users', id);
  res.json({
    message: 'Update Users Success',
    data: {
      id: id,
      name: 'Ridwan',
      email: 'ridwankece@gmail.com',
    },
  });
};

module.exports = {
  getAllUers,
  createNewUers,
  updateDataUser,
  deleteDataUSer,
};
