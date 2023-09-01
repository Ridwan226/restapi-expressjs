const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'GET users Success',
  });
});

router.post('/', (req, res) => {
  res.json({
    message: 'POST users Success',
  });
});

module.exports = router;
