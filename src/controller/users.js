const getAllUers = (req, res) => {
  const data = {
    id: 1,
    name: 'Ridwan',
    email: 'Ridwan@gmail.com',
  };
  res.json({
    message: 'GET All Users Success',
    data: data,
  });
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
