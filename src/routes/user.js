const express = require('express');
const userControllers = require('../controllers/user');
const { displayNameValidation, emailValidation } = require('../middlewares/userValidations');
const validateJWT = require('../middlewares/validateJWT');

const userRouter = express.Router();

userRouter.post(
'/',
displayNameValidation,
emailValidation,
userControllers.createUser,
);

userRouter.get('/', validateJWT, userControllers.findAll);
userRouter.get('/:id', validateJWT, userControllers.findById);

module.exports = userRouter;