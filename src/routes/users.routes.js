const express = require('express');
const productController = require('../controllers/usersController');
const router = express.Router();

router.get('/', productController.getUsers);

module.exports = router;