const logRequest = (req, res, next) => {
  console.log('log terjadi Request', req.path);
  next();
};

module.exports = {logRequest};
