const express = require('express');
const loginController = require('../controllers/login');
const loginValidation = require('../middlewares/loginValidations');

const loginRouter = express.Router();

loginRouter.post('/', loginValidation, loginController.login);

module.exports = loginRouter;