const express = require('express');
const postController = require('../controllers/BlogPost');
const validateJWT = require('../middlewares/validateJWT');
const postValidation = require('../middlewares/postValidations');

const postRouter = express.Router();

postRouter.post('/', validateJWT, postValidation, postController.createPost);
postRouter.get('/', validateJWT, postController.getAllPosts);
postRouter.get('/:id', validateJWT, postController.findPostById);

module.exports = postRouter;