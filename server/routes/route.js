const express = require('express');

var userController = require('../Controllers/User');
var roomsController = require('../controllers/rooms');
const router = express.Router();

router.post('/signup', userController.signUp);
router.get('/login', userController.login);
router.get('/rooms',roomsController.rooms)
module.exports = router;
