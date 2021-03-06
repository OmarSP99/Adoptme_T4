var express = require('express');
var router = express.Router();

let userController = require('../controllers/users');

router.get('/', userController.read);

router.post('/', userController.create);

router.put('/:id', userController.update);

router.delete('/:id', userController.delete_u);

module.exports = router;