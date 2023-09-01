const getAllUers = (req, res) => {
  res.json({
    message: 'GET All Users Success',
  });
};

const createNewUers = (req, res) => {
  res.json({
    message: 'Create New Users Success',
  });
};

module.exports = {
  getAllUers,
  createNewUers,
};
