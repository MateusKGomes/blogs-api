const express = require('express');
const userControllers = require('../controllers/user');

const userRouter = express.Router();

userRouter.post('/', userControllers.createUser);

module.exports = userRouter;