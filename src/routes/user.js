const express = require('express');
const userControllers = require('../controllers/user');
const { displayNameValidation, emailValidation } = require('../middlewares/userValidations');

const userRouter = express.Router();

userRouter.post(
'/',
displayNameValidation,
emailValidation,
userControllers.createUser,
);

module.exports = userRouter;