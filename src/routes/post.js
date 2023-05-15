const express = require('express');
const postController = require('../controllers/BlogPost');
const validateJWT = require('../middlewares/validateJWT');
const { postValidation, categoryValidation } = require('../middlewares/postValidations');

const postRouter = express.Router();

postRouter.post('/', validateJWT, postValidation, categoryValidation, postController.createPost);
postRouter.get('/', validateJWT, postController.getAllPosts);
postRouter.get('/:id', validateJWT, postController.findPostById);
postRouter.put('/:id', validateJWT, postValidation, postController.updatePost);
postRouter.delete('/:id', validateJWT, postController.deletePost);

module.exports = postRouter;