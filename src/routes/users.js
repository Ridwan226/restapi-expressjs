const express = require('express');
const UserController = require('../controller/users');
const router = express.Router();

router.post('/', UserController.createNewUers);
router.get('/', UserController.getAllUers);
router.patch('/:id', UserController.updateDataUser);
router.delete('/:id', UserController.deleteDataUSer);

module.exports = router;
