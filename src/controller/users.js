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

const createNewUers = async (req, res) => {
  const {body} = req;

  try {
    await UsersModel.createNewUsers(body);
    res.json({
      message: 'Create New Users Success',
      data: body,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: err,
    });
  }
};

const updateDataUser = async (req, res) => {
  const {id} = req.params;
  const {body} = req;
  try {
    await UsersModel.updateUsers(body, id);
    res.status(201).json({
      message: 'Update Users Success',
      data: body,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: err,
    });
  }
};

const deleteDataUSer = async (req, res) => {
  const {id} = req.params;
  try {
    await UsersModel.deleteUsers(id);
    res.json({
      message: 'Update Users Success',
      data: {
        id: id,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: err,
    });
  }
};

module.exports = {
  getAllUers,
  createNewUers,
  updateDataUser,
  deleteDataUSer,
};
