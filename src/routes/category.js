const express = require('express');
const categoryControllers = require('../controllers/category');
const { nameValidation } = require('../middlewares/categoryValidations');
const validateJWT = require('../middlewares/validateJWT');

const categoryRouter = express.Router();

categoryRouter.post(
'/',
validateJWT,
nameValidation,
categoryControllers.createCategory,
);

categoryRouter.get('/', validateJWT, categoryControllers.getAllCategories);

module.exports = categoryRouter;